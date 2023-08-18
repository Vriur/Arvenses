import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GO_BACK, MISSING_INFORMATION } from '../../Constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: '2%',
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
        borderBottomColor: '#174c72'
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        padding: '2%',
        width: '100%',
        borderRadius: 20,
        borderColor: '#174c72',
        backgroundColor: '#174c72',
        borderWidth: 1,
    },

    textButton: {
        color: 'white',
        fontSize: 16
    },

    name: {
        maxWidth: '80%',
        marginBottom: '2%',
        color: '#174c72',
        fontSize: 24
    },

    description: {
        maxWidth: '90%',
        color: '#174c72',
        fontSize: 16
    },

    spaceFiller: {
        flexGrow: 1
    },

    imageContainer: {
        height: 120, 
        marginTop: '5%',
        marginBottom: '2%',
        aspectRatio: 1 / 1,
        overflow: 'hidden',
        borderRadius: 10
    },

    image: {
        width: '100%',
        height: '100%',
    },
});

const TaxonomicMissingInformation = ({navigation: {goBack}}) => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.description}>{JSON.stringify(MISSING_INFORMATION.OPTIONS)}</Text>
            <View style = {styles.spaceFiller} />
            <TouchableOpacity style = {styles.button} onPress = {() => goBack()}>
                <Text style = {styles.textButton}>{GO_BACK}</Text>
            </TouchableOpacity>
        </View>
    );
} 

export default TaxonomicMissingInformation;