import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { openDatabase } from '../../database-service';
import { AntDesign } from '@expo/vector-icons';
import { TAXONOMIC_FLOWER_ID } from '../../Constants';
import { ICONS } from '../assets/requireFiles/icons';
import TaxonomyActionBar from '../components/molecules/TaxonomyActionBar';

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
    const path = route.params.path;
    const [subCategories, setSubCategories] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            let database = await openDatabase();
            database.transaction((query) => {
                query.executeSql(
                    `SELECT _id, category_value AS name, description
                    FROM attribute_category 
                    WHERE specie_category_id = ?
                    AND category_main_id IS NULL`, [path.categoryId],
                    (query, resultSet) => {
                        setSubCategories(resultSet.rows._array);
                    },
                    (query, error) => {console.log(error)}
                )
            });
        } 
        fetchData();
    }, [path.categoryId]);

    const handlePressSubCategory = (item) => {
        if(item._id !== TAXONOMIC_FLOWER_ID){
            navigation.navigate('TaxonomicAttributes', {path: {...path, subCategoryId: item._id, subCategoryName: item.name}});
        }
        else{
            navigation.navigate('TaxonomicFlowerCategories', {path: {...path, subCategoryId: item._id, subCategoryName: item.name}, item: item});
        }
    }

    return(
        <View style = {styles.container}>
            <Text style = {styles.path}>{`${path.categoryName}/`}</Text>
            <FlatList data = {subCategories}
                renderItem = {({item}) => 
                    <TouchableOpacity style = {styles.button} onPress = {() => handlePressSubCategory(item)}>
                        <TouchableOpacity style = {styles.imageContainer} onLongPress = {() => navigation.navigate('TaxonomicIconInformation', {image: ICONS['attribute_category'][item._id], name: item.name, description: item.description})}>
                            <Image source = {ICONS['attribute_category'][item._id]} style = {styles.image} />
                        </TouchableOpacity>
                        <Text style = {styles.buttonText}>{item.name}</Text>
                        <View style = {styles.spaceFiller} />
                        <AntDesign name="right" size={24} color="#174c72" />
                    </TouchableOpacity>
                }
            />
            <TaxonomyActionBar navigation = {navigation} />
        </View>
    );
} 

export default TaxonomicSubCategory;