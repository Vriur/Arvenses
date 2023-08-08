import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { openDatabase } from '../../database-service';
import CardList from '../components/molecules/CardList';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const GalerySearch = ({navigation}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData(){
            let database = await openDatabase();
            database.transaction((query) => {
                query.executeSql("SELECT _id, scientific_name FROM specie", [],
                    (query, resultSet) => {
                        let results = [];
                        resultSet.rows._array.forEach(item => {
                            let result = {id: item._id, scientificName: item.scientific_name};
                            results.push(result);
                        });
                        setData(results);
                    },
                    (query, error) => {console.log(error)}
                )
            });
        } 
        fetchData();
    }, [])

    return(
        <View style = {styles.container}>
            <CardList data = {data} navigation = {navigation} />
        </View>
    );
} 

export default GalerySearch;