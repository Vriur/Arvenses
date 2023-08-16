import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { openDatabase } from '../../database-service';
import { GALERY_SEARCH } from '../../Constants';
import CardList from '../components/molecules/CardList';
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: '1%',
        borderColor: '#41ade7',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 2
    },

    searchField: {
        fontSize: 16,
        marginLeft: '1%',
        paddingLeft: '1%',
        paddingRight: '5%',
        width: '95%'
    },

    resultNumber: {
        fontSize: 16,
        margin: '1%',
        paddingHorizontal: 10
    }
});

const GalerySearch = ({navigation}) => {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [dataQuantity, setDataQuantity] = useState(0);
    const [searchText, setSearchText] = useState('');
    
    useEffect(() => {
        async function fetchData(){
            let database = await openDatabase();
            database.transaction((query) => {
                query.executeSql('SELECT _id, scientific_name FROM specie', [],
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
                        setFilterData(results);
                        setDataQuantity(results.length);
                    },
                    (query, error) => {console.log(error)}
                )
            });
        } 
        fetchData();
    }, []);

    useEffect(() => {
        let filteredResults = data.filter((item) => {
            let itemName = item.scientificName + ' ' + item.authors;
            return itemName.includes(searchText);
        })
        setFilterData(filteredResults);
        setDataQuantity(filteredResults.length);
    }, [searchText]);

    const handleChangeText = (newText) => {
        setSearchText(newText);
    }

    return(
        <View style = {styles.container}>
            <View style = {styles.searchBar}>
                <AntDesign name = 'search1' size = {16} color = '#41ade7' />
                <TextInput value = {searchText} defaultValue = {''} placeholder = {GALERY_SEARCH.SEARCH_FIELD_PLACEHOLDER} onChangeText = {newText => handleChangeText(newText)} style = {styles.searchField} />
            </View>
            <Text style = {styles.resultNumber}>{GALERY_SEARCH.NUMBER_QUANTITY_TEXT + dataQuantity + '.'}</Text>
            <CardList data = {filterData} navigation = {navigation} />
        </View>
    );
} 

export default GalerySearch;