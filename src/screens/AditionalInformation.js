import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
        fontStyle: 'italic',
        fontSize: 16
    },

});

const AditionalInformation = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.button} onPress={() => console.log('Descargar Información Adicional')}>
                <Text style = {styles.buttonText}>Descargar Información Adicional</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress={() => console.log('Descargar Referencias')}>
                <Text style = {styles.buttonText}>Descargar Referencias</Text>
            </TouchableOpacity>
        </View>
    );
} 

export default AditionalInformation;