import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ADITIONAL_INFORMATION } from '../../Constants';
import { AntDesign } from '@expo/vector-icons'; 

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
    return(
        <View style = {styles.container}>
            <FlatList data = {ADITIONAL_INFORMATION.BUTTONS}
                renderItem = {({item}) => 
                    <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('PdfReader', {url: item.DOWNLOADABLE_FILE})}>
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