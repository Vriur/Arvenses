import React from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ABOUT_US, APP, CONTACT_PREFIX } from '../../Constants';

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

    hyperLink: {
        color: '#41ade7',
        textDecorationLine: 'underline'
    },

    scrollSection: {
        flex: 1,
        backgroundColor: 'white'
    },

    button: {
        backgroundColor: '#174c72',
        alignItems: 'center',
        justifyContent: 'center',
        height: '8%'
    },

    genericTitle:{
        color: 'white',
        fontSize: 20,
        marginHorizontal: '4%',
        marginTop: '5%',
        backgroundColor: '#41ade7'
    },

    genericText: {
        color: 'black',
        fontSize: 20,
        marginHorizontal: '4%',
        marginTop: '2%',
    },
});

const AboutUs = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.headerText}>{APP.NAME}</Text>
            </View>
            <ScrollView style = {styles.scrollSection}>
                <Text style = {styles.genericTitle}>{ABOUT_US.AUTHORS_TITLE}</Text>
                <Text style = {styles.genericText}>{ABOUT_US.AUTHORS_TEXT}</Text>
                <Text style = {styles.genericTitle}>{ABOUT_US.PROGRAMMERS_TITLE}</Text>
                <Text style = {styles.genericText}>{ABOUT_US.PROGRAMMERS_TEXT}</Text>
                <Text style = {styles.genericTitle}>{ABOUT_US.GRAPHIC_DESIGNERS_TITLE}</Text>
                <Text style = {styles.genericText}>{ABOUT_US.GRAPHIC_DESIGNERS_TEXT}</Text>
                <Text style = {styles.genericTitle}>{ABOUT_US.ACKNOWLEDGMENT_TITLE}</Text>
                <Text style = {styles.genericText}>{ABOUT_US.ACKNOWLEDGMENT_TEXT}</Text>
                <Text style = {styles.genericTitle}>{ABOUT_US.CONTACT_TITLE}</Text>
                <Text style = {styles.genericText}>
                    <Text style = {styles.genericText}>{ABOUT_US.CONTACT_TEXT}</Text>
                    <Text style = {[styles.genericText, styles.hyperLink]} onPress={() => Linking.openURL(`${CONTACT_PREFIX[ABOUT_US.CONTACT_LINK.PREFIX]}${ABOUT_US.CONTACT_LINK.VALUE}`)}>{ABOUT_US.CONTACT_LINK.VALUE}</Text>
                </Text>
                <Text style = {[styles.genericTitle, {marginBottom: '5%'}]}>{ABOUT_US.PROJECT_INFO}</Text>
            </ScrollView>
            <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('SearchMenu')}>
                <Text style = {{color: 'white'}}>{ABOUT_US.BUTTON_TEXT}</Text>
            </TouchableOpacity>
        </View>
    );
} 

export default AboutUs;