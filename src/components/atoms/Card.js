import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { openDatabase } from '../../../database-service';
import { Buffer } from 'buffer';

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
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    name: {
        marginLeft: '5%',
        marginRight: '5%',
        color: '#174c72',
        fontSize: 12,
    },

    scientificName: {
        marginLeft: '5%',
        marginRight: '5%',
        color: '#41ade7',
        fontSize: 10,
        fontStyle: 'italic',
    }
});

const Card = (props) => {
    let cardData = props.cardData;
    const [imageURL, setImageUrl] = useState("");

    async function fetchData(){
        let database = await openDatabase();
        database.transaction((query) => {
            query.executeSql("SELECT hex(image) as img FROM specie WHERE _id = ? ", [cardData.id],
                (query, resultSet) => {
                    let imageInHex = resultSet.rows._array[0].img;
                    const imageBuffer = Buffer.from(imageInHex, 'hex');
                    let imageInBase64 = imageBuffer.toString('base64');
                    setImageUrl("data:image/png;base64," + imageInBase64);
                },
                (query, error) => {console.log(error + " " + cardData.id)}
            );
        });
    } 

    fetchData();

    return(
        <TouchableOpacity style = {styles.container} onPress={() => props.navigation.navigate('ResultMenu')}>
            <View style = {styles.imageContainer}>
                <Image source = {{uri: imageURL  ? imageURL : null}} style = {styles.image} />
            </View>
            <View style = {styles.textData}>
                <Text style = {styles.name} numberOfLines={1} ellipsizeMode='tail' >{cardData.name}</Text>
                <Text style = {styles.scientificName} numberOfLines={2} ellipsizeMode='tail' >{cardData.scientificName}</Text>
            </View>
        </TouchableOpacity>
    );
} 

export default Card;