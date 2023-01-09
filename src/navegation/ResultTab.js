import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faImages, faFileLines, faList, faBookBookmark, faHand } from '@fortawesome/free-solid-svg-icons'
import ResultImages from '../screens/ResultImages';
import ResultDescription from '../screens/ResultDescription';
import ResultAttributes from '../screens/ResultAttributes';
import ResultReferences from '../screens/ResultReferences';
import ResultQuotedHandling from '../screens/ResultQuotedHandling';

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
            <Tab.Screen name = "Descripción" component = {ResultDescription} options = {{tabBarIcon:() => (<FontAwesomeIcon icon = {faFileLines} size = {28} style = {{color: 'white'}} />)}} />
            <Tab.Screen name = "Atributos" component = {ResultAttributes} options = {{tabBarIcon:() => (<FontAwesomeIcon icon = {faList} size = {28} style = {{color: 'white'}} />)}} />
            <Tab.Screen name = "Referencias" component = {ResultReferences} options = {{tabBarIcon:() => (<FontAwesomeIcon icon = {faBookBookmark} size = {28} style = {{color: 'white'}} />)}} />
            <Tab.Screen name = "Manejo Citado" component = {ResultQuotedHandling} options = {{tabBarIcon:() => (<FontAwesomeIcon icon = {faHand} size = {28} style = {{color: 'white'}} />)}} />
        </Tab.Navigator>
    );
} 

export default ResultTab;