import React, { useState } from 'react';
import { Image, ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackgroundImg from './../assets/icons/img_inicio.jpg';
import FabioIcon from './../assets/icons/fabio_icon.png';
import UCRIcon from './../assets/icons/ucr_icon.png';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    backgroundImg: {
        flex: 1,
        width: '100%',
        height: '100%'
    },

    icons: {
        flex: 2,
        backgroundColor: 'white',
        opacity: 0.75,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    icon: {
        flex: 1,
        width: '70%',
        height: '70%',
        resizeMode: 'contain'
    },

    emptyField: {
        flexGrow: 1
    },

    appInfo: {
        flex: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },

    appInfoText: {
        textAlign: 'center',
        color: '#174c72',
        textShadowColor: 'white', 
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
        fontSize: 30,
        fontWeight: 'bold'
    },

    button: {
        flex: 1,
        backgroundColor: '#174c72',
        opacity: 0.65,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: 'white'
    },

    modalViewBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },

    modalText: {
        marginBottom: 15,
        textAlign: 'left'
    },

    modalButton: {
        alignSelf: 'flex-end',
        padding: '4%'
    },

    modalButtonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red',
    }
});

const Home = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(true);
    return(
        <View style = {styles.container}>
            <ImageBackground source = {BackgroundImg} style = {styles.backgroundImg} resizeMode = 'cover' >
                <View style = {styles.icons}>
                    <Image source = {UCRIcon} style = {styles.icon} />
                    <Text style = {styles.emptyField}></Text>
                    <Image source = {FabioIcon} style = {styles.icon} />
                </View>
                <View style = {styles.appInfo}>
                    <Text style = {styles.appInfoText}> Pastarvenses {'\n'} V 1.0 </Text>
                </View>
                <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('SearchMenu')}>
                    <Text style = {styles.buttonText}>ENTRAR</Text>
                </TouchableOpacity>
            </ImageBackground>
            
            <Modal animationType = 'slide' transparent = {true} visible = {modalVisible} onRequestClose = {() => setModalVisible(!modalVisible)}>
                <View style = {styles.modalViewBackground}>
                    <View style = {styles.modalView}>
                        <Text style = {styles.modalTitle}>ADVERTENCIA</Text>
                        <Text style = {styles.modalText}>La información sobre manejo acá se incluye de buena fe, con base en la información publicada. NO constituye recomendación, NI preferencia de los autores o la Universidad de Costa Rica.</Text>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style = {styles.modalButton}>
                            <Text style = {styles.modalButtonText}>Entendido</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
} 

export default Home;