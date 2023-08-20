import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { DOWNLOAD, GO_BACK } from '../../Constants';
import { Feather } from '@expo/vector-icons'; 
import Constants from 'expo-constants';

const PdfReader = ({navigation: {goBack}}) => {
    const styles = StyleSheet.create({
        mainContent: {
            flex: 50,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: Constants.statusBarHeight,
        },

        hideContent: {
            flex: 1,
        },

        button: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: 80,
            padding: '2%',
            width: '94%',
            borderRadius: 20,
            borderColor: '#174c72',
            backgroundColor: '#174c72',
            borderWidth: 1,
        },
    
        textButton: {
            color: 'white',
            fontSize: 16
        },

        downloadText: {
            fontSize: 20,
            color: '#174c72',
            textAlign: 'center',
            maxWidth: '94%',
            marginTop: '2%',
            marginBottom: '5%'
        }
    });

    return(
        <>
            <WebView 
                source = {require('./../assets/files/1.pdf')} 
                downloadingMessage = {DOWNLOAD.TOAST_TEXT}
                style = {Platform.OS === 'android' ? styles.mainContent : styles.hideContent} 
            />
            
            {
                Platform.OS === 'android' ?
                <View style = {styles.mainContent}>
                    <Feather name = 'download' size = {40} color = '#174c72' />
                    <Text style = {styles.downloadText}>{DOWNLOAD.TEXT}</Text>
                    <TouchableOpacity style = {styles.button} onPress = {() => goBack()}>
                        <Text style = {styles.textButton}>{GO_BACK}</Text>
                    </TouchableOpacity>
                </View>
                : null
            }
        </>
    );
}

export default PdfReader;