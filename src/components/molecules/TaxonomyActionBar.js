import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { GO_BACK, TAXONOMY_ACTION_BAR_TEXT } from './../../../Constants';
import { openDatabase } from '../../../database-service';

const styles = StyleSheet.create({
    actionButtonsContainer: {
        flexDirection: 'row',
        width: '100%',
        padding: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 2,
        backgroundColor: '#174c72',
        borderRadius: 25,
        borderWidth: 1
    },

    actionButtonText: {
        fontSize: 15,
        color: 'white',
        marginLeft: 4
    },

    spaceFiller: {
        flex: 1
    }
});

const TaxonomyActionBar = ({navigation, showBack = true}) => {
    const [data, setData] = useState([]);
    const [dataQuantity, setDataQuantity] = useState(0);
    const selectedOptions = useSelector((state) => state.taxonomicOptions);
    let areResults = !!useSelector((state) => state.taxonomicOptions).length;

    useEffect(() => {
        async function fetchData(){
            let database = await openDatabase();
            database.transaction((query) => {
                query.executeSql('SELECT _id, scientific_name FROM specie ORDER BY family_id ASC, scientific_name ASC', [],
                    (query, resultSet) => {
                        let results = [];
                        resultSet.rows._array.forEach(item => {
                            /* Se separa el valor almacenado en la base de datos en el nombre de la planta y el 
                            nombre del autor, esto con fin de que el nombre de la planta se muestre en itálica. */  
                            let name = item.scientific_name.split(' ');
                            let scientificName = name.slice(0, 2).join(' ')  + ' ';
                            let authors = name.slice(2).join(' ');
                            let result = {id: item._id, scientificName: scientificName, authors: authors};
                            results.push(result);
                        });
                        setData(results);
                        setDataQuantity(results.length);
                    },
                    (query, error) => {console.log(error)}
                )
            });
        } 
        fetchData();
    }, []);

    return(
        <View style = {styles.actionButtonsContainer}>
            <View style = {styles.spaceFiller} />
            {
                showBack &&
                <>
                    <TouchableOpacity style = {styles.actionButton} onPress = {() => navigation.goBack()}>
                        <AntDesign name = 'back' size = {26} color = 'white' />
                        <Text style = {styles.actionButtonText}>{GO_BACK}</Text>
                    </TouchableOpacity>
                </>
            }
            {
                areResults &&
                <>
                    <View style = {styles.spaceFiller} />
                    <TouchableOpacity style = {styles.actionButton} onPress = {() => navigation.navigate('TaxonomicResults', {data: data})}>
                        <AntDesign name = 'eyeo' size = {26} color = 'white' />
                        <Text style = {styles.actionButtonText}>{`${TAXONOMY_ACTION_BAR_TEXT.MATCHES}${dataQuantity}`}</Text>
                    </TouchableOpacity>
                    <View style = {styles.spaceFiller} />
                    <TouchableOpacity style = {styles.actionButton} onPress = {() => navigation.navigate('TaxonomicMarks')}>
                        <AntDesign name = 'plus' size = {26} color = 'white' />
                        <Text style = {styles.actionButtonText}>{TAXONOMY_ACTION_BAR_TEXT.MARKS}</Text>
                    </TouchableOpacity>
                </>
            }
            <View style = {styles.spaceFiller} />
        </View>
    );
} 

export default TaxonomyActionBar;