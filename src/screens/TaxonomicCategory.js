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
        padding: '7%',
        borderRadius: 20,
        borderColor: '#174c72',
        borderWidth: 1
    },

    buttonText: {
        color: '#174c72',
        fontSize: 16
    },

    imageContainer: {
        height: '70%',
        aspectRatio: 1 / 1,
        overflow: 'hidden',
        borderRadius: 10
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

const TaxonomicCategory = ({navigation}) => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            let database = await openDatabase();
            database.transaction((query) => {
                query.executeSql("SELECT _id, value FROM specie_category", [],
                    (query, resultSet) => {
                        setCategories(resultSet.rows._array);
                    },
                    (query, error) => {console.log(error)}
                )
            });
        } 
        fetchData();
    }, []);

    const tempIcon = require('./../assets/icons/app_icon.png');
    return(
        <View style = {styles.container}>
            <FlatList data = {categories}
                renderItem = {({item}) => 
                    <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('TaxonomicSubCategory', {id: item['_id']})}>
                        <View style = {styles.imageContainer}>
                            <Image source = {tempIcon} style = {styles.image} />
                        </View>
                        <Text style = {styles.buttonText}>{item.value}</Text>
                        <AntDesign name="right" size={24} color="#174c72" />
                    </TouchableOpacity>
                }
            />
        </View>
    );
} 

export default TaxonomicCategory;