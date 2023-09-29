import React from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import ImageModal from 'react-native-image-modal';
import { IMAGES } from './../assets/requireFiles/images';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
        marginVertical: '2%'
    },

    image: {
        margin: '2%',
        width: 0.9 * Dimensions.get('window').width,
    },
});

const ResultImages = (initialParams) => {
    const id = initialParams.route.params.id;

    return(
        <View style = {styles.container}>
            <FlatList data = {IMAGES[id]} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
                renderItem = {({item}) => 
                    <ImageModal
                        source = {item}
                        swipeToDismiss = {true}
                        resizeMode = 'contain'
                        imageBackgroundColor = 'white'
                        style={styles.image}  
                    />
                }
            />
        </View>
    );
} 

export default ResultImages;