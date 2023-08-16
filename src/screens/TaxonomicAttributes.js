import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { openDatabase } from '../../database-service';
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

    buttonText: {
        flexGrow: 1,
        marginLeft: '2%',
        color: '#174c72',
        fontSize: 16
    },

    imageContainer: {
        height: 60, 
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
                    `SELECT _id, category_value AS value
                    FROM attribute_category 
                    WHERE specie_category_id = 1
                    AND category_main_id = ?`, [subCategoryId],
                    (query, resultSet) => {
                        console.log('sub category id', subCategoryId);
                        console.log(resultSet.rows._array);
                        setAttributes(resultSet.rows._array);
                    },
                    (query, error) => {console.log(error)}
                )
            });
        } 
        fetchData();
    }, [categoryId]);

    const tempIcon = require('./../assets/icons/app_icon.png');
    return(
        <View style = {styles.container}>
            <FlatList data = {attributes}
                renderItem = {({item}) => 
                    <TouchableOpacity style = {styles.button} onPress = {() => console.log('FALTA')}>
                        <TouchableOpacity style = {styles.imageContainer} onLongPress = {() => navigation.navigate('TaxonomicIconInformation', {id: item._id})}>
                            <Image source = {tempIcon} style = {styles.image} />
                        </TouchableOpacity>
                        <Text style = {styles.buttonText}>{item.value}</Text>
                        <AntDesign name="right" size={24} color="#174c72" />
                    </TouchableOpacity>
                }
            />
        </View>
    );
} 

export default TaxonomicAttributes;