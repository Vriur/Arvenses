import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TaxonomyStack from './../navegation/TaxonomyStack';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const TaxonomySearch = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <NavigationContainer independent = {true}>
                <TaxonomyStack />
            </NavigationContainer>
        </View>
    );
} 

export default TaxonomySearch;