import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'

const styles = StyleSheet.create({
    iconButton: {
        margin: '5%',
        padding: '2%'
    },
    
    icon: {
        color: 'white'
    },

    name: {
        flex: 1,
        color: 'white',
        textAlign: 'right',
        marginRight: '5%',
    },
});

const ResultBar = ({containerStyle, name, navigation}) => {
    return(
        <View style = {containerStyle}>
            <TouchableOpacity style = {styles.iconButton} onPress={() => navigation.goBack()}>
                <FontAwesomeIcon icon = {faLeftLong} size = {32} style = {styles.icon} />
            </TouchableOpacity>
            <Text style = {styles.name}>{name}</Text>
        </View>
    );
} 

export default ResultBar;