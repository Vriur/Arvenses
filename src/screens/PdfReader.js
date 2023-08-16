import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { DOWNLOAD } from '../../Constants';
import Constants from 'expo-constants';
import * as FileSystem from 'expo-file-system';
import { Asset, useAssets } from 'expo-asset';

const PdfReader = ({navigation: {goBack}}) => {
    const styles = StyleSheet.create({
        mainContent: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: Constants.statusBarHeight
        }
    });

    //let fileBase64 = 'data:application/pdf;base64,SG9sYSBxdWUgdGFsDQo='
    /*const getFiles = async () => {
        const [{localUri}] = await Asset.loadAsync(require('./../assets/files/1.pdf'));
        fileBase64 += await FileSystem.readAsStringAsync(localUri);
        console.log('blablabla');
        console.log(fileBase64.slice(0, 1000));
    }
    getFiles();*/

    const handleLoad = () => {
        if(Platform.OS === 'android'){
            goBack();
        }
    };

    return(
        <WebView 
            source = {require('./../assets/files/1.pdf')} 
            downloadingMessage = {DOWNLOAD}
            onLoadProgress = {handleLoad}
            style= {styles.mainContent}
        />
    );
}

export default PdfReader;