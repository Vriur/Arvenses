import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { APP, GO_BACK, HELP } from '../../Constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        backgroundColor: '#174c72',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: '8%'
    },

    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '5%',
    },

    scrollSection: {
        flex: 1,
        backgroundColor: 'white'
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#174c72',
        height: '8%',
    },

    buttonText: {
        color: 'white', 
        fontSize: 16
    },

    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: '5%',
    },

    genericTitle:{
        color: 'white',
        fontSize: 20,
        marginHorizontal: '4%',
        marginTop: '5%',
        paddingVertical: 4,
        paddingHorizontal: 10,
        backgroundColor: '#41ade7',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#41ade7',
    },

    genericText: {
        color: 'black',
        fontSize: 20,
        marginHorizontal: '4%',
        textAlign: 'justify',
        borderStyle:'dotted'
    },
});

const Help = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.headerText}>{APP.NAME}</Text>
            </View>
            <ScrollView style = {styles.scrollSection}>
                <Text style = {styles.title}>{HELP.WELCOME}</Text>
                <Text style = {styles.genericText}>{HELP.MAIN_TEXT}</Text>
                <Text style = {styles.genericTitle}>{HELP.GALERY_TITLE}</Text>
                <Text style = {styles.genericText}>{HELP.GALERY_TEXT}</Text>
                <Text style = {styles.genericTitle}>{HELP.TAXONOMY_TITLE}</Text>
                <Text style = {[styles.genericText, {fontWeight: 'bold'}]}>{HELP.TAXONOMY_WARNING}</Text>
                <Text style = {styles.genericText}>{HELP.TAXONOMY_TEXT}</Text>
                <Text style = {styles.genericTitle}>{HELP.MATCHING_OPTIONS_TITLE}</Text>
                <Text style = {[styles.genericText, {marginBottom: '5%'}]}>{HELP.MATCHING_OPTIONS_TEXT}</Text>
            </ScrollView>
            <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('SearchMenu')}>
                <Text style = {styles.buttonText}>{GO_BACK}</Text>
            </TouchableOpacity>
        </View>
    );
} 

export default Help;