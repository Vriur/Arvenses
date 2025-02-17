import React from 'react';
import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ADITIONAL_INFORMATION } from '../../Constants';
import { AntDesign } from '@expo/vector-icons'; 

import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';
import { Asset } from 'expo-asset';
import * as Sharing from 'expo-sharing';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
        margin: '1%',
        padding: '2%',
        backgroundColor: 'white',
        borderColor: '#174c72',
        borderWidth: 1,
        borderRadius: 20,
    },

    buttonText: {
        color: '#174c72',
        marginLeft: '2%',
        fontSize: 16
    },

    spaceFiller: {
        flex: 1
    }
});

const AditionalInformation = ({navigation}) => {
    const loadFile = async (uri) => {
        const [{ localUri }] = await Asset.loadAsync(uri);
        FileSystem.getContentUriAsync(localUri).then(contentUri => {
            if(Platform.OS === 'android'){
                IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
                    data: contentUri,
                    flags: 1,
                })
            }
            else{
                if(Platform.OS === 'ios'){
                    Sharing.shareAsync(contentUri);
                }
            }
        });
    }

    return(
        <View style = {styles.container}>
            <FlatList data = {ADITIONAL_INFORMATION.BUTTONS}
                renderItem = {({item}) => 
                    <TouchableOpacity style = {styles.button} onPress = {() => loadFile(item.DOWNLOADABLE_FILE)}>
                        <Text style = {styles.buttonText}>{item.TEXT}</Text>
                        <View style = {styles.spaceFiller} />
                        <AntDesign name = 'download' size = {30} color = '#174c72' />
                    </TouchableOpacity>
                }
            />
        </View>
    );
} 

export default AditionalInformation;