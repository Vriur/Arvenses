import React from 'react';
import { StyleSheet, View } from 'react-native';
import CardList from '../components/molecules/CardList';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const TaxonomicResults = ({navigation, route}) => {
    const data = route.params.data;
    
    return(
        <View style = {styles.container}>
            <CardList data = {data} navigation = {navigation.getParent()} />
        </View>
    );
} 

export default TaxonomicResults;