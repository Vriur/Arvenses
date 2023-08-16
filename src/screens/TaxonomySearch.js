import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TAXONOMY_SEARCH_WARNING } from './../../Constants';
import { NavigationContainer } from '@react-navigation/native';
import TaxonomyStack from './../navegation/TaxonomyStack';
import TaxonomicCategory from './TaxonomicCategory';

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

    mainContent: {
        flex: 17,
    }
});

const TaxonomySearch = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.warning}>
                <Text style = {styles.warningText}>{TAXONOMY_SEARCH_WARNING}</Text>
            </View>
            <View style = {styles.mainContent}>
                <NavigationContainer independent = {true}>
                    <TaxonomyStack />
                </NavigationContainer>
            </View>
        </View>
    );
} 

export default TaxonomySearch;