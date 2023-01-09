import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    definitionsBar: {
        flex: 1,
        backgroundColor: '#ffdd00',
        flexDirection: 'row',
        alignItems: 'center'
    },

    definitionsIcon: {
        color: 'white',
        margin: '2%'
    },

    definitionsText: {
        color: '#68665c'
    },

    mainContent: {
        flex: 9
    }
});

const QuotedHandlingSearch = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.definitionsBar} onPress={() => navigation.navigate('Definitions')}>
                <FontAwesomeIcon icon = {faClipboard} size = {40} style = {styles.definitionsIcon} />
                <Text style = {styles.definitionsText}>DEFINICIONES</Text>
            </TouchableOpacity>
            <View style = {styles.mainContent}></View>
        </View>
    );
} 

export default QuotedHandlingSearch;