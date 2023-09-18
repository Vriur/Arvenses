import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import TaxonomyStack from './../navegation/TaxonomyStack';
import store from './../redux/Store'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const TaxonomySearch = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <Provider store = {store}>
                <NavigationContainer independent = {true}>
                    <TaxonomyStack />
                </NavigationContainer>
            </Provider>
        </View>
    );
} 

export default TaxonomySearch;