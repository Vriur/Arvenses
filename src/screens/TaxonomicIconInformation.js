import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GO_BACK } from '../../Constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: '2%',
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#174c72'
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

const TaxonomicIconInformation = ({route, navigation: {goBack}}) => {
    const image = route.params.image;
    const name = route.params.name;
    const description = route.params.description;

    return(
        <View style = {styles.container}>
            <View style = {styles.imageContainer}>
                <Image source = {image} style = {styles.image} />
            </View>
            <Text style = {styles.name}>{name}</Text>
            <Text style = {styles.description}>{description}</Text>
            <View style = {styles.spaceFiller} />
            <TouchableOpacity style = {styles.button} onPress = {() => goBack()}>
                <Text style = {styles.textButton}>{GO_BACK}</Text>
            </TouchableOpacity>
        </View>
    );
} 

export default TaxonomicIconInformation;