import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const ResultAttributes = () => {
    return(
        <View style = {styles.container}>
            <Text>Resultado: Atributos</Text>
        </View>
    );
} 

export default ResultAttributes;