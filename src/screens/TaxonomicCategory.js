import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { database } from '../../database-service';
import { AntDesign } from '@expo/vector-icons';
import { TAXONOMY_SEARCH_WARNING } from './../../Constants';
import { ICONS } from './../assets/requireFiles/icons';
import TaxonomyActionBar from '../components/molecules/TaxonomyActionBar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    mainContent: {
        flex: 17,
    },

    warning: {
        flex: 3,
        backgroundColor: '#e46305',
        alignItems: 'center',
        justifyContent: 'center'
    },

    warningText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18
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

const TaxonomicCategory = ({navigation}) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchData(){
            database.transaction((query) => {
                query.executeSql(`SELECT _id, value FROM specie_category`, [],
                    (query, resultSet) => {
                        setCategories(resultSet.rows._array);
                    },
                    (query, error) => {console.log(error)}
                )
            });
        } 
        fetchData();
    }, []);

    return(
        <View style = {styles.container}>
            <View style = {styles.warning}>
                <Text style = {styles.warningText}>{TAXONOMY_SEARCH_WARNING}</Text>
            </View>
            <View style = {styles.mainContent}>
                <FlatList data = {categories}
                    renderItem = {({item}) => 
                        <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('TaxonomicSubCategory', {path: {categoryId: item._id, categoryName: item.value}})}>
                            <View style = {styles.imageContainer}>
                                <Image source = {ICONS['specie_category'][item._id]} style = {styles.image} />
                            </View>
                            <Text style = {styles.buttonText}>{item.value}</Text>
                            <View style = {styles.spaceFiller} />
                            <AntDesign name = 'right' size = {24} color = '#174c72' />
                        </TouchableOpacity>
                    }
                />
            </View>
            <TaxonomyActionBar navigation = {navigation} showBack = {false} />
        </View>
    );
} 

export default TaxonomicCategory;