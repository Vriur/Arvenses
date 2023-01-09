import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
        textAlign: 'justify'
    },
});

const AboutUs = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.headerText}>Pastarvenses</Text>
            </View>
            <ScrollView style = {styles.scrollSection}>
                <Text style = {styles.genericTitle}>Autores:</Text>
                <Text style = {styles.genericText}>Mary Pamela Portuguez García, Renán Agüero Alvarado, Ana María Rodríguez Ruiz, Steven Brenes Prendas.</Text>
                <Text style = {styles.genericTitle}>Programadores:</Text>
                <Text style = {styles.genericText}>María Obregón Coto, Nathan González Herrera.</Text>
                <Text style = {styles.genericTitle}>Diseñadoras Gráficas:</Text>
                <Text style = {styles.genericText}>Evelyn Naranjo Madrigal (diseñadora gráfica de dibujos del glosario), Jasmin Ortega Gutiérrez.</Text>
                <Text style = {styles.genericTitle}>Agradecimiento:</Text>
                <Text style = {styles.genericText}>Franklin Herrera Murillo, Moisés Hernández Chaves, Silvia Rivas González, Carlos Fonseca Fonseca y a todos los productores que nos permitieron muestrear sus fincas.</Text>
                <Text style = {styles.genericTitle}>Contacto:</Text>
                <Text style = {styles.genericText}>Correo: arvenses.eeafbm@ucr.ac.cr\nTeléfono: 2511-7778.</Text>
                <Text style = {[styles.genericTitle, {marginBottom: '5%'}]}>Proyecto ED-1816 Universidad de Costa Rica</Text>
            </ScrollView>
            <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('SearchMenu')}>
                <Text style = {{color: 'white'}}>ACEPTAR</Text>
            </TouchableOpacity>
        </View>
    );
} 

export default AboutUs;