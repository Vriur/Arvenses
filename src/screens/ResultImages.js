import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { IMAGES } from './../assets/requireFiles/images';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imageContainer: {
        flex: 1,
        aspectRatio: 1 / 1,
        overflow: 'hidden',
        alignItems: 'center',
        marginBottom: '1%'
    },

    image: {
        width: '98%',
        height: '100%',
        resizeMode: 'cover',
        margin: '1%'
    },
});

const ResultImages = () => {
    return(
        <View style = {styles.container}>
            <FlatList data = {IMAGES[0]}
                renderItem = {({item}) => 
                    <View style = {styles.imageContainer}>
                        <Image source = {item} style = {styles.image} />
                    </View>
                }
            />
        </View>
    );
} 

export default ResultImages;