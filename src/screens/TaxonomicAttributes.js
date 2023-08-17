import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { openDatabase } from '../../database-service';
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    optionsContainer: {
        margin: '1%',
        borderRadius: 20,
        borderColor: '#174c72',
        borderWidth: 1,
    },

    button: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '1%',
        padding: '2%',
        borderRadius: 20,
        borderColor: '#174c72',
        borderWidth: 1
    },

    optionButton: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '2%',
        borderRadius: 20,
    },

    buttonText: {
        maxWidth: '60%',
        marginLeft: '2%',
        color: '#174c72',
        fontSize: 16,
    },

    optionButtonText: {
        maxWidth: '60%',
        marginLeft: '2%',
        color: '#174c72',
        fontSize: 12,
    },

    spaceFiller: {
        flexGrow: 1
    },

    imageContainer: {
        height: 60, 
        aspectRatio: 1 / 1,
        overflow: 'hidden',
        borderRadius: 10
    },

    optionImageContainer: {
        height: 40, 
        marginLeft: '5%',
        aspectRatio: 1 / 1,
        overflow: 'hidden',
        borderRadius: 10
    },

    image: {
        width: '100%',
        height: '100%',
    },
});

const TaxonomicAttributes = ({navigation, route}) => {
    const categoryId = route.params.categoryId;
    const subCategoryId = route.params.subCategoryId;
    const [attributes, setAttributes] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            let database = await openDatabase();
            database.transaction((query) => {
                query.executeSql(
                    `SELECT ac._id AS attribute_id, ac.category_value AS attribute_name, ac.description AS attribute_description, a._id AS attribute_option_id, a.attribute_name AS attribute_option_name, a.description AS attribute_option_description
                    FROM attribute_category AS ac
                    JOIN attribute AS a
                    ON ac._id = a.attribute_category_id
                    WHERE ac.specie_category_id = ?
                    AND ac.category_main_id = ?`, [categoryId, subCategoryId],
                    (query, resultSet) => {
                        let attributes = groupObject(resultSet.rows._array);
                        setAttributes(attributes);
                    },
                    (query, error) => {console.log(error)}
                )
            });
        } 
        fetchData();
    }, [categoryId, subCategoryId]);

    // Esta función se encarga de agrupar los atributos en la jerarquía correspondiente.
    const groupObject = (object) => {
        let groupedObject = object.reduce((accumulator, item) => {
            accumulator[item.attribute_id] = accumulator[item.attribute_id] || {
                'attribute_name': item.attribute_name,
                'attribute_description': item.attribute_description,
            };

            // Si el atributo no cuenta con valores, se inicializa el array de estos.
            if(accumulator[item.attribute_id]['options'] == undefined){ 
                accumulator[item.attribute_id]['options'] = [];
            }
            
            accumulator[item.attribute_id]['options'].push({
                'attribute_option_id': item.attribute_option_id,
                'attribute_option_name': item.attribute_option_name,
                'attribute_option_description': item.attribute_option_description,
            });
            return accumulator;
        }, {});

        return groupedObject;
    }

    const tempIcon = require('./../assets/icons/app_icon.png');
    return(
        <ScrollView style = {styles.container}>
            { 
                /* Mapeo correspondiente a los atributos del arvense. */
                Object.keys(attributes).map(item => {
                    return (
                        <View>
                            <TouchableOpacity key = {item} style = {styles.button} onPress = {() => console.log('FALTA')}>
                                <TouchableOpacity style = {styles.imageContainer} onLongPress = {() => navigation.navigate('TaxonomicIconInformation', {id: item, name: attributes[item]['attribute_name'], description: attributes[item]['attribute_description']})}>
                                    <Image source = {tempIcon} style = {styles.image} />
                                </TouchableOpacity>
                                <Text style = {styles.buttonText}>{attributes[item]['attribute_name']}</Text>
                                <View style = {styles.spaceFiller} />
                                <AntDesign name="down" size={24} color="#174c72" />
                            </TouchableOpacity>

                            <View key = {`${item}_options`} style = {styles.optionsContainer}>
                                {
                                    /* Mapeo correspondiente a las opciones de cada atributo. */    
                                    attributes[item]['options'].map(option => {
                                        return (
                                            <TouchableOpacity key = {`${item}_${option['attribute_option_id']}`} style = {styles.optionButton} onPress = {() => console.log('FALTA')}>
                                                <TouchableOpacity style = {styles.optionImageContainer} onLongPress = {() => navigation.navigate('TaxonomicIconInformation', {id: option['attribute_option_id'], name: option['attribute_option_name'], description: option['attribute_option_description']})}>
                                                    <Image source = {tempIcon} style = {styles.image} />
                                                </TouchableOpacity>
                                                <Text style = {styles.optionButtonText}>{option['attribute_option_name']}</Text>
                                                <View style = {styles.spaceFiller} />
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>   
                        </View>               
                    );
                })
            }
        </ScrollView>
    );
} 

export default TaxonomicAttributes;