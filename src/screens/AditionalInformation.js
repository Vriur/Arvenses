import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ADITIONAL_INFORMATION } from '../../Constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    button: {
        backgroundColor: '#174c72',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '2%',
        padding: '10%',
        borderRadius: 20
    },

    buttonText: {
        color: 'white',
        fontSize: 16
    },

});

const AditionalInformation = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <FlatList data = {ADITIONAL_INFORMATION.BUTTONS}
                renderItem = {({item}) => 
                    <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('PdfReader')}>
                        <Text style = {styles.buttonText}>{item.TEXT}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    );
} 

export default AditionalInformation;