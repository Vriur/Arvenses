import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { GO_BACK, TAXONOMY_ACTION_BAR_TEXT } from './../../../Constants';
import { database } from '../../../database-service';

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
    const [filterlessData, setFilterlessData] = useState([]);
    const [data, setData] = useState([]);
    const [dataQuantity, setDataQuantity] = useState(0);
    const selectedAttributes = useSelector((state) => state.taxonomicOptions);
    let areResults = !!useSelector((state) => state.taxonomicOptions).length;

    useEffect(() => {
        async function fetchData(){
            database.transaction((query) => {
                query.executeSql(
                    `SELECT s._id, s.scientific_name, f.family_value, g.gender_value, sam.attribute_id, sc.value
                    FROM family AS f, gender AS g, specie AS s, specie_attribute_mid AS sam, specie_category AS sc 
                    WHERE s.family_id = f._id 
                    AND s.gender_id = g._id 
                    AND s.specie_category_id = sc._id
                    AND s._id = sam.specie_id
                    ORDER BY family_id ASC, scientific_name ASC`, [],
                    (query, resultSet) => {
                        setFilterlessData(resultSet.rows._array);
                        updateData(resultSet.rows._array);
                    },
                    (query, error) => {console.log(error)}
                )
            });
        } 
        fetchData();
    }, []);

    useEffect(() => {
        updateData(filterlessData);
    }, [selectedAttributes]);

    const updateData = (filterlessData) => {
        let filteredData = getFilteredResultSet(filterlessData);
        setDataQuantity(filteredData.length);
        setData(filteredData);
    }

    const getFilteredResultSet = (resultSet) => {
        let reduceResultSet = resultSet.reduce((accumulator, item) => {
            accumulator[item._id] = accumulator[item._id] || {scientificName: item.scientific_name, family: item.family_value, gender: item.gender_value, category: item.value, attributes: []};
            accumulator[item._id]['attributes'].push(item.attribute_id);
            return accumulator;
        }, {});
        
        selectedAttributes.forEach(attribute => {
            Object.keys(reduceResultSet).forEach(specieId => {
                if(!reduceResultSet[specieId]['attributes'].includes(attribute.attributeId)){
                    delete reduceResultSet[specieId];
                }
            })
        });
        
        let filteredSpecies = [];
        Object.keys(reduceResultSet).forEach(specieId => {
            /* Se separa el valor almacenado en la base de datos en el nombre de la planta y el 
            nombre del autor, esto con fin de que el nombre de la planta se muestre en itálica. */  
            let name = reduceResultSet[specieId]['scientificName'].split(' ');
            let scientificName = name.slice(0, 2).join(' ')  + ' ';
            let authors = name.slice(2).join(' ');
            let specie = {
                id: specieId, 
                scientificName: scientificName, 
                authors: authors,
                family: reduceResultSet[specieId]['family'],
                gender: reduceResultSet[specieId]['gender'],
                category: reduceResultSet[specieId]['category'],
            };
            filteredSpecies.push(specie);
        });
        
        return filteredSpecies;
        return [];
    }

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