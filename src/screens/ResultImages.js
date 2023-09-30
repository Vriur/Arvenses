import React from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import ImageModal from 'react-native-image-modal';
import { IMAGES } from './../assets/requireFiles/images';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },

    imageContainer: {
        marginHorizontal: '1%',
        marginVertical: '1%',
        borderColor: '#41ade7',
        borderWidth: 1,
    },

    image: {
        height: 200,
        width: (0.94 * Dimensions.get('window').width) / 2,
    },
});

const ResultImages = (initialParams) => {
    const id = initialParams.route.params.id;

    return(
        <View style = {styles.container}>
            <FlatList data = {IMAGES[id]} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
                renderItem = {({item}) =>
                    <View style = {styles.imageContainer}> 
                        <ImageModal
                            source = {item}
                            swipeToDismiss = {true}
                            imageBackgroundColor = {'#E5E4E2'}
                            resizeMode = 'contain'
                            style = {styles.image}  
                        />
                    </View>
                }
                numColumns={2}
            />
        </View>
    );
} 

export default ResultImages;