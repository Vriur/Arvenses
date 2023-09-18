import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MISSING_INFORMATION, PRESENT_FLOWER_TEXT } from '../../Constants';
import { ICONS } from '../assets/requireFiles/icons';
import TaxonomyActionBar from '../components/molecules/TaxonomyActionBar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    path: {
        color: 'white',
        fontSize: 16,
        padding: 10,
        backgroundColor: '#174c72'
    },

    button: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '1%',
        padding: '2%',
        borderRadius: 20,
        borderColor: '#174c72',
        borderWidth: 1
    },

    buttonText: {
        maxWidth: '60%',
        marginLeft: '2%',
        color: '#174c72',
        fontSize: 16
    },

    spaceFiller: {
        flexGrow: 1
    },

    imageContainer: {
        height: 60, 
        aspectRatio: 1 / 1,
        overflow: 'hidden',
        borderRadius: 10
    },

    image: {
        width: '100%',
        height: '100%',
    },
});

const TaxonomyFlowerCategories = ({navigation, route}) => {
    const path = route.params.path;
    const item = route.params.item;

    return(
        <View style = {styles.container}>
            <Text style = {styles.path}>{`${path.categoryName}/ ${path.subCategoryName}`}</Text>
            <>
                <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('TaxonomicAttributes', {path: {...path, subCategoryId: item._id, subCategoryName: `${item.name}/ Flores Presentes`}})}>
                    <TouchableOpacity style = {styles.imageContainer} onLongPress = {() => navigation.navigate('TaxonomicIconInformation', {id: item._id, name: item.name, description: item.description})}>
                        <Image source = {ICONS[0]} style = {styles.image} />
                    </TouchableOpacity>
                    <Text style = {styles.buttonText}>{PRESENT_FLOWER_TEXT}</Text>
                    <View style = {styles.spaceFiller} />
                    <AntDesign name="right" size={24} color="#174c72" />
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('TaxonomicMissingInformation')}>
                    <View style = {styles.imageContainer}>
                        <Image source = {ICONS[0]} style = {styles.image} />
                    </View>
                    <Text style = {styles.buttonText}>{MISSING_INFORMATION.NAME}</Text>
                    <View style = {styles.spaceFiller} />
                    <AntDesign name="right" size={24} color="#174c72" />
                </TouchableOpacity>
            </>
            <View style = {styles.spaceFiller} />
            <TaxonomyActionBar navigation = {navigation} />
        </View>
    );
} 

export default TaxonomyFlowerCategories;