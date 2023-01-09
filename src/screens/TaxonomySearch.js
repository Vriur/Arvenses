import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    warning: {
        flex: 3,
        backgroundColor: '#e46305',
        alignItems: 'center',
        justifyContent: 'center'
    },

    warningText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18
    },

    mainContent: {
        flex: 17,
    }
});

const TaxonomySearch = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.warning}>
                <Text style = {styles.warningText}>¡Recuerde que cuando cambie de hoja ancha a hoja angosta debe limpiar las marcas!</Text>
            </View>
            <View style = {styles.mainContent}></View>
        </View>
    );
} 

export default TaxonomySearch;