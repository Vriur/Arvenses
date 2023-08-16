import React from 'react';
import { StyleSheet } from 'react-native';
import { RESULT_TAB } from './../../Constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faImages, faFileLines, faList, faBookBookmark, faHand } from '@fortawesome/free-solid-svg-icons'
import ResultImages from '../screens/ResultImages';
import ResultAttributes from '../screens/ResultAttributes';

const styles = StyleSheet.create({
    headerShown: false, 

    tabBarActiveBackgroundColor: '#41ade7', 

    tabBarLabelStyle: {
        color: 'white'
    }, 

    tabBarStyle: {
        backgroundColor: '#174c72'
    }
});

const Tab = createBottomTabNavigator();

const ResultTab = (props, {navigation}) => {
    return(
        <Tab.Navigator initialRouteName = 'Atributos' backBehavior = 'none' screenOptions = {styles}>
            <Tab.Screen name = {RESULT_TAB.ATTRIBUTE_NAME} component = {ResultAttributes} initialParams = {props.itemData} options = {{tabBarIcon:() => (<FontAwesomeIcon icon = {faList} size = {28} style = {{color: 'white'}} />)}} />
            <Tab.Screen name = {RESULT_TAB.IMAGES_NAME} component = {ResultImages} initialParams = {{id: props.itemData.id}} options = {{tabBarIcon:() => (<FontAwesomeIcon icon = {faImages} size = {28} style = {{color: 'white'}} />)}} />
        </Tab.Navigator>
    );
} 

export default ResultTab;