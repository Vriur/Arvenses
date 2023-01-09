import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardList from '../components/molecules/CardList';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Ojo de poeta',
        scientificName: 'Thunbergia alata Bojer ex Sims Acanthaceae'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Second Item',
        scientificName: 'Third Item'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Third Item',
        scientificName: 'First Item'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',
        name: 'First Item',
        scientificName: 'Second Item'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
        name: 'Second Item',
        scientificName: 'Third Item'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        name: 'Third Item',
        scientificName: 'First Item'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4',
        name: 'First Item',
        scientificName: 'Second Item'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
        name: 'Second Item',
        scientificName: 'Third Item'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d76',
        name: 'Third Item',
        scientificName: 'First Item'
    },
  ];

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const GalerySearch = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <CardList data = {DATA} navigation = {navigation} />
        </View>
    );
} 

export default GalerySearch;