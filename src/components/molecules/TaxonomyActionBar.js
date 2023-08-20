import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { GO_BACK, TAXONOMY_ACTION_BAR_TEXT } from './../../../Constants';

const styles = StyleSheet.create({
    actionButtonsContainer: {
        flexDirection: 'row',
        width: '100%',
        padding: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 2,
        backgroundColor: '#174c72',
        borderRadius: 25,
        borderWidth: 1
    },

    actionButtonText: {
        fontSize: 15,
        color: 'white',
        marginLeft: 4
    },

    spaceFiller: {
        flex: 1
    }
});

const TaxonomyActionBar = ({navigation, showBack = true, areResults = true}) => {
    return(
        <View style = {styles.actionButtonsContainer}>
            {
                showBack &&
                <>
                    <TouchableOpacity style = {styles.actionButton} onPress = {() => navigation.goBack()}>
                        <AntDesign name = 'back' size = {26} color = 'white' />
                        <Text style = {styles.actionButtonText}>{GO_BACK}</Text>
                    </TouchableOpacity>
                </>
            }
            {
                areResults &&
                <>
                    <View style = {styles.spaceFiller} />
                    <TouchableOpacity style = {styles.actionButton}>
                        <AntDesign name = 'eyeo' size = {26} color = 'white' />
                        <Text style = {styles.actionButtonText}>{`${TAXONOMY_ACTION_BAR_TEXT.MATCHES}10`}</Text>
                    </TouchableOpacity>
                    <View style = {styles.spaceFiller} />
                    <TouchableOpacity style = {styles.actionButton} onPress = {() => navigation.navigate('TaxonomicMarks')}>
                        <AntDesign name = 'plus' size = {26} color = 'white' />
                        <Text style = {styles.actionButtonText}>{TAXONOMY_ACTION_BAR_TEXT.MARKS}</Text>
                    </TouchableOpacity>
                    <View style = {styles.spaceFiller} />
                </>
            }
        </View>
    );
} 

export default TaxonomyActionBar;