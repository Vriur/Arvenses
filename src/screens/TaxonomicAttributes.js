import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { database } from '../../database-service';
import { AntDesign } from '@expo/vector-icons';
import { ICONS } from './../assets/requireFiles/icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import TaxonomyActionBar from '../components/molecules/TaxonomyActionBar';
import { AddTaxonomicOption, DeleteTaxonomicOption } from '../redux/TaxonomicOptionsSlice';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    path: {
        color: 'white',
        fontSize: 16,
        padding: 10,
        backgroundColor: '#174c72'
    },

    optionsContainer: {
        marginBottom: '1%',
        marginHorizontal: '1%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderColor: '#174c72',
        borderWidth: 1,
        borderTopWidth: 0
    },

    button: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '2%',
        marginHorizontal: '1%',
        padding: '2%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderColor: '#174c72',
        borderWidth: 1
    },

    buttonWithoutOptions: {
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
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
    const dispatch = useDispatch();
    const checkedOptions = useSelector((state) => state.taxonomicOptions);
    const path = route.params.path;
    const [attributes, setAttributes] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            database.transaction((query) => {
                query.executeSql(
                    `SELECT ac._id AS attribute_id, ac.category_value AS attribute_name, ac.description AS attribute_description, a._id AS attribute_option_id, a.attribute_name AS attribute_option_name, a.description AS attribute_option_description
                    FROM attribute_category AS ac
                    JOIN attribute AS a
                    ON ac._id = a.attribute_category_id
                    WHERE ac.category_main_id = ?`, [path.subCategoryId],
                    (query, resultSet) => {
                        let attributes = groupObject(resultSet.rows._array);
                        setAttributes(attributes);
                    },
                    (query, error) => {console.log(error)}
                )
            });
        } 
        fetchData();
    }, [path]);

    // Esta función se encarga de agrupar los atributos en la jerarquía correspondiente.
    const groupObject = (object) => {
        let groupedObject = object.reduce((accumulator, item) => {
            accumulator[item.attribute_id] = accumulator[item.attribute_id] || {
                'attribute_name': item.attribute_name,
                'attribute_description': item.attribute_description,
                'showOptions': false,
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

    const handleShowOptions = (id) => {
        let newAttributes = {...attributes};
        newAttributes[id]['showOptions'] = !attributes[id]['showOptions'];
        setAttributes(newAttributes);
    }

    const handleCheckOption = (isChecked, optionSelected) => {
        if(isChecked){
            dispatch(AddTaxonomicOption(optionSelected));
        }
        else{
            dispatch(DeleteTaxonomicOption(optionSelected.route));
        }
    }

    const mustCheckOption = (route) => {
        return !!checkedOptions.filter((item) => item.route === route).length;
    }

    return(
        <View style = {styles.container}>
            <ScrollView style = {styles.container}>
                <Text style = {styles.path}>{`${path.categoryName}/ ${path.subCategoryName}/`}</Text>
                { 
                    /* Mapeo correspondiente a los atributos del arvense. */
                    Object.keys(attributes).map(item => {
                        return (
                            <View key = {item}>
                                <TouchableOpacity key = {item} style = {attributes[item]['showOptions'] ? styles.button : [styles.button, styles.buttonWithoutOptions]} onPress = {() => handleShowOptions(item)}>
                                    <TouchableOpacity style = {styles.imageContainer} onLongPress = {() => navigation.navigate('TaxonomicIconInformation', {image: ICONS['attribute_category'][item], name: attributes[item]['attribute_name'], description: attributes[item]['attribute_description']})}>
                                        <Image source = {ICONS['attribute_category'][item]} style = {styles.image} />
                                    </TouchableOpacity>
                                    <Text style = {styles.buttonText}>{attributes[item]['attribute_name']}</Text>
                                    <View style = {styles.spaceFiller} />
                                    <AntDesign name="down" size={24} color="#174c72" />
                                </TouchableOpacity>

                                {
                                    attributes[item]['showOptions'] &&
                                    <View key = {`${item}_options`} style = {styles.optionsContainer}>
                                        {
                                            /* Mapeo correspondiente a las opciones de cada atributo. */    
                                            attributes[item]['options'].map(option => {
                                                return (
                                                    <View key = {`${item}_${option['attribute_option_id']}`} style = {styles.optionButton}>
                                                        <TouchableOpacity style = {styles.optionImageContainer} onLongPress = {() => navigation.navigate('TaxonomicIconInformation', {image: ICONS['attribute'][option['attribute_option_id']], name: option['attribute_option_name'], description: option['attribute_option_description']})}>
                                                            <Image source = {ICONS['attribute'][option['attribute_option_id']]} style = {styles.image} />
                                                        </TouchableOpacity>
                                                        <Text style = {styles.optionButtonText}>{option['attribute_option_name']}</Text>
                                                        <View style = {styles.spaceFiller} />
                                                        <BouncyCheckbox 
                                                            size = {30} 
                                                            fillColor = '#174c72' 
                                                            isChecked = {mustCheckOption(`${path.categoryName}/ ${path.subCategoryName} / ${attributes[item]['attribute_name']}: ${option['attribute_option_name']}`)}
                                                            onPress = {(isChecked) => {
                                                                handleCheckOption(isChecked,
                                                                    {
                                                                        attributeId: option['attribute_option_id'],
                                                                        route: `${path.categoryName}/ ${path.subCategoryName}/ ${attributes[item]['attribute_name']}: ${option['attribute_option_name']}`
                                                                    })
                                                                isChecked = !isChecked}} 
                                                        />
                                                    </View>
                                                )
                                            })
                                        }
                                    </View>
                                }   
                            </View>             
                        );
                    })
                }
            </ScrollView>
            <TaxonomyActionBar navigation = {navigation} />
        </View>
    );
} 

export default TaxonomicAttributes;