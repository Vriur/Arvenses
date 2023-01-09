import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const ResultDescription = () => {
    return(
        <View style = {styles.container}>
            <Text>Resultado: Descripción</Text>
        </View>
    );
} 

export default ResultDescription;