import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppIcon from './../../assets/images/prueba.jpeg';

const styles = StyleSheet.create({
    container: {
        margin: '2%',
        backgroundColor: '#edeced',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '46%',
        height: 200,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    imageContainer: {
        height: '70%',
        aspectRatio: 1 / 1,
        overflow: 'hidden',
        borderRadius: 2000
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    textData: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    name: {
        marginLeft: '10%',
        color: '#174c72',
        fontSize: 12,
    },

    scientificName: {
        marginLeft: '10%',
        color: '#41ade7',
        fontSize: 10,
        fontStyle: 'italic'
    }
});

const Card = (props) => {
    const cardData = props.cardData;

    return(
        <TouchableOpacity style = {styles.container} onPress={() => props.navigation.navigate('ResultMenu')}>
            <View style = {styles.imageContainer}>
                <Image source = {AppIcon} style = {styles.image} />
            </View>
            <View style = {styles.textData}>
                <Text style = {styles.name}>{cardData.name}</Text>
                <Text style = {styles.scientificName}>{cardData.scientificName}</Text>
            </View>
        </TouchableOpacity>
    );
} 

export default Card;