import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { TAXONOMY_MARKS, GO_BACK } from '../../Constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

    eraseAllButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        marginBottom: 2,
        padding: '2%',
        width: '100%',
        borderRadius: 20,
        borderColor: '#CC0000',
        backgroundColor: '#CC0000',
        borderWidth: 1,
    },

    textButton: {
        color: 'white',
        fontSize: 16
    },

    marksTitle: {
        fontSize: 24,
        color: '#174c72',
        padding: 10
    },

    spaceFiller: {
        flex: 1
    },

    markContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#174c72',
        width: '100%',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginVertical: 2
    },

    markText: {
        fontSize: 16,
        color: '#174c72',
        maxWidth: '70%'
    },

    markDeleteButton: {
        backgroundColor: '#174c72',
        padding: 8,
        marginRight: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },

    markDeleteButtonText: {
        fontSize: 16,
        color: 'white',
        marginTop: 2
    },

    noMarkFind: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    noMarkFindText: {
        color: '#CC0000',
        fontSize: 24,
        fontWeight: 'bold'
    },
});

const TaxonomicMarks = ({navigation: {goBack}}) => {
    const tempMarkList = [
        'Hoja / General / Espinas / 1',
        'Hoja / General / Espinas / 2', 
        'Hoja / General / Espinas / 3', 
        'Hoja / General / Espinas / 4',
        'Hoja / General / Espinas / 1',
        'Hoja / General / Espinas / 2', 
        'Hoja / General / Espinas / 3', 
        'Hoja / General / Espinas / 4',
    ];
    const areMarks = true;

    return(
        <View style = {styles.container}>
            <Text style = {styles.marksTitle}>{TAXONOMY_MARKS.MARKS_SELECTED_TITLE}</Text>
            {
                areMarks ?
                <>
                    <FlatList data = {tempMarkList}
                        renderItem = {({item}) => 
                            <View style = {styles.markContainer}>
                                <Text style = {styles.markText}>{item}</Text>
                                <View style = {styles.spaceFiller} />
                                <TouchableOpacity style = {styles.markDeleteButton} onPress = {() => console.log('Falta')}>
                                    <FontAwesome5 name = 'trash' size = {24} color = 'white' />
                                    <Text style = {styles.markDeleteButtonText}>{TAXONOMY_MARKS.ERASE}</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                    <TouchableOpacity style = {styles.eraseAllButton} onPress = {() => console.log('Falta')}>
                        <Text style = {styles.textButton}>{TAXONOMY_MARKS.ERASE_ALL}</Text>
                    </TouchableOpacity>
                </>
                : <View style = {styles.noMarkFind}>
                    <MaterialCommunityIcons name = 'cancel' size = {50} color = '#CC0000' />
                    <Text style = {styles.noMarkFindText}>{TAXONOMY_MARKS.NO_MARKS_SELECTED}</Text>
                </View>
            }
            <TouchableOpacity style = {styles.button} onPress = {() => goBack()}>
                <Text style = {styles.textButton}>{GO_BACK}</Text>
            </TouchableOpacity>
        </View>
    );
} 

export default TaxonomicMarks;