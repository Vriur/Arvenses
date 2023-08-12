import React from 'react';
import { StyleSheet } from 'react-native';
import { SEARCH_TAB } from './../../Constants';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GalerySearch from './../screens/GalerySearch';
import TaxonomySearch from './../screens/TaxonomySearch';
import AditionalInformation from './../screens/AditionalInformation';

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
            <Tab.Screen name = {SEARCH_TAB.GALERY_NAME} component = {GalerySearch} navigation = {navigation} />
            <Tab.Screen name = {SEARCH_TAB.TAXONOMY_NAME} component = {TaxonomySearch} />
            <Tab.Screen name = {SEARCH_TAB.ADITIONAL_INFORMATION_NAME} component = {AditionalInformation} />
        </Tab.Navigator>
    );
} 

export default SearchTab;