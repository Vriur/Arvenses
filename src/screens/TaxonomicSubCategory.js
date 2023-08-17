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
        maxWidth: '60%',
        marginLeft: '2%',
        color: '#174c72',
        fontSize: 16
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

    image: {
        width: '100%',
        height: '100%',
    },
});

const TaxonomicSubCategory = ({navigation, route}) => {
    const categoryId = route.params.categoryId;
    const [subCategories, setSubCategories] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            let database = await openDatabase();
            database.transaction((query) => {
                query.executeSql(
                    `SELECT _id, category_value AS name, description
                    FROM attribute_category 
                    WHERE specie_category_id = ?
                    AND category_main_id IS NULL`, [categoryId],
                    (query, resultSet) => {
                        setSubCategories(resultSet.rows._array);
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
            <FlatList data = {subCategories}
                renderItem = {({item}) => 
                    <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('TaxonomicAttributes', {categoryId: categoryId, subCategoryId: item._id})}>
                        <TouchableOpacity style = {styles.imageContainer} onLongPress = {() => navigation.navigate('TaxonomicIconInformation', {id: item._id, name: item.name, description: item.description})}>
                            <Image source = {tempIcon} style = {styles.image} />
                        </TouchableOpacity>
                        <Text style = {styles.buttonText}>{item.name}</Text>
                        <View style = {styles.spaceFiller} />
                        <AntDesign name="right" size={24} color="#174c72" />
                    </TouchableOpacity>
                }
            />
        </View>
    );
} 

export default TaxonomicSubCategory;