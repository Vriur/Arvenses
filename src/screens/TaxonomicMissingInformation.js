import React from 'react';
import { FlatList, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { CONTACT_PREFIX, GO_BACK, MISSING_INFORMATION } from '../../Constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: '2%',
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
        borderBottomColor: '#174c72'
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

    title: {
        fontSize: 20,
        color: '#174c72',
        marginTop: '5%',
    },

    description: {
        fontSize: 16,
        color: 'black',
        maxWidth: '94%',
        marginTop: '2%'
    },

    contactName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        maxWidth: '94%',
        marginTop: '2%'
    },

    contactContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: '2%',
        borderColor: '#41ade7',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 2
    },

    contactInfo: {
        color: '#41ade7',
        textDecorationLine: 'underline',
        marginLeft: 5
    },
});

const TaxonomicMissingInformation = ({navigation: {goBack}}) => {
    return(
        <View style = {styles.container}>
            <FlatList data = {MISSING_INFORMATION.OPTIONS} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
                renderItem = {({item}) => 
                    <View>
                        <Text style = {styles.title}>{item.TITLE}</Text>
                        <Text style = {styles.description}>{item.DESCRIPTION}</Text>
                        <Text style = {styles.description}>{MISSING_INFORMATION.CONTACT_Label}</Text>
                        <FlatList data = {item.INFORMATION} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
                            renderItem = {({item}) => 
                                <View>
                                    <Text style = {styles.contactName}>{item.NAME}</Text>
                                    <FlatList data = {item.CONTACTS} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
                                        renderItem = {({item}) => 
                                            <TouchableOpacity style = {styles.contactContainer} onPress={() => {Linking.openURL(`${CONTACT_PREFIX[item.PREFIX]}${item.VALUE}`)}}>
                                                <AntDesign name="contacts" size={24} color="#41ade7" />
                                                <Text style = {styles.contactInfo} >{item.VALUE}</Text>
                                            </TouchableOpacity>
                                        }
                                    />
                                </View>
                            }
                        />
                    </View>
                }
            />
            <TouchableOpacity style = {styles.button} onPress = {() => goBack()}>
                <Text style = {styles.textButton}>{GO_BACK}</Text>
            </TouchableOpacity>
        </View>
    );
} 

export default TaxonomicMissingInformation;