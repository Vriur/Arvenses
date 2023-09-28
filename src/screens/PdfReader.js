import React from 'react';
import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';
import { Asset } from 'expo-asset';
import { Platform, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { DOWNLOAD } from '../../Constants';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    mainContent: {
        flex: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight,
    },
});

const PdfReader = ({route, navigation: {goBack}}) => {
    const url = route.params.url;
    const showFile = async () => {
        const [{ localUri }] = await Asset.loadAsync(url);
        FileSystem.getContentUriAsync(localUri).then(contentUri => {
            IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
                data: contentUri,
                flags: 1,
            }).then(result => {
                if(result.resultCode === 0){
                    goBack();
                }
            });
        });
    }

    if(Platform.OS === 'android'){
        showFile();
    }

    return(
        <>
            {
                Platform.OS === 'ios' ?
                    <WebView 
                        source = {url} 
                        downloadingMessage = {DOWNLOAD.TOAST_TEXT}
                        allowFileAccess = {true}
                        style = {styles.mainContent} 
                    />
                : null
            }
        </>
    );
}

export default PdfReader;