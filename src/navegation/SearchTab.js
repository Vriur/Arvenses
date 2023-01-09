import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import GalerySearch from '../screens/GalerySearch'
import TaxonomySearch from '../screens/TaxonomySearch'
import QuotedHandlingSearch from '../screens/QuotedHandlingSearch'

const styles = StyleSheet.create({
    headerShown: false, 

    tabBarLabelStyle: {
        color: 'white'
    }, 

    tabBarIndicatorStyle: {
        backgroundColor: '#41ade7', 
        padding: 2
    }, 

    tabBarStyle: {
        backgroundColor: '#174c72'
    }
});

const Tab = createMaterialTopTabNavigator();

const SearchTab = ({navigation}) => {
    return(
        <Tab.Navigator screenOptions = {styles} >
            <Tab.Screen name = "Galería" component = {GalerySearch} navigation = {navigation} />
            <Tab.Screen name = "Taxonomía" component = {TaxonomySearch} />
            <Tab.Screen name = "Manejo Citado" component = {QuotedHandlingSearch} />
        </Tab.Navigator>
    );
} 

export default SearchTab;