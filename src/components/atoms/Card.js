import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IMAGES } from './../../assets/requireFiles/images';

const styles = StyleSheet.create({
    container: {
        margin: '2%',
        backgroundColor: '#edeced',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '96%',
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    name: {
        textAlign: 'center',
        marginLeft: '5%',
        marginRight: '5%',
        color: '#41ade7',
        fontSize: 12
    },

    scientificName: {
        fontStyle: 'italic'
    }
});

const Card = (props) => {
    let cardData = props.cardData;
    
    return(
        <TouchableOpacity style = {styles.container} onPress={() => props.navigation.navigate('ResultMenu', {itemData: cardData})}>
            <View style = {styles.imageContainer}>
                <Image source = {IMAGES[cardData.id % 2][0]} style = {styles.image} />
            </View>
            <View style = {styles.textData}>
                <Text style = {styles.name}>
                    <Text style = {styles.scientificName} numberOfLines={2} ellipsizeMode='tail' >{cardData.scientificName}</Text>
                    <Text numberOfLines={2} ellipsizeMode='tail' >{cardData.authors}</Text>
                </Text>
            </View>
        </TouchableOpacity>
    );
} 

export default Card;