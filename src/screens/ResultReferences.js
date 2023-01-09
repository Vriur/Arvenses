import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const ResultReferences = () => {
    return(
        <View style = {styles.container}>
            <Text>Resultado: Referencias</Text>
        </View>
    );
} 

export default ResultReferences;