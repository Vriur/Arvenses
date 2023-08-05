import React from 'react';
import { StyleSheet } from 'react-native';
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

const ResultTab = ({navigation}) => {
    return(
        <Tab.Navigator screenOptions = {styles} initialRouteName = 'Atributos' >
            <Tab.Screen name = "Imágenes" component = {ResultImages} options = {{tabBarIcon:() => (<FontAwesomeIcon icon = {faImages} size = {28} style = {{color: 'white'}} />)}} />
            <Tab.Screen name = "Atributos" component = {ResultAttributes} options = {{tabBarIcon:() => (<FontAwesomeIcon icon = {faList} size = {28} style = {{color: 'white'}} />)}} />
        </Tab.Navigator>
    );
} 

export default ResultTab;