import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const ResultImages = () => {
    return(
        <View style = {styles.container}>
            <Text>Resultado: Imágenes</Text>
        </View>
    );
} 

export default ResultImages;