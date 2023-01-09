import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const ResultQuotedHandling = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <Text>Resultado: Manejo Citado</Text>
        </View>
    );
} 

export default ResultQuotedHandling;