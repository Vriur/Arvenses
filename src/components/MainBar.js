import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import AppIcon from './../assets/images/app_icon.png';

const styles = StyleSheet.create({
    icon: {
        width: '15%',
        height: '90%',
        resizeMode: 'contain'
    },

    text: {
        flex: 1,
        textAlign: 'left',
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },

    menu: {
        alignItems: 'flex-end',
    },
});

const triggerStyles = {
    triggerWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '10%',
    }
};

const optionsStyles = {
    optionsContainer: {
        padding: 5,
    },

    optionWrapper: {
        margin: 5,
    },

    optionText: {
        color: 'black',
    },
  };

const MainBar = ({navigation, containerStyle}) => {
    return(
        <View style = {containerStyle}>
            <Image source = {AppIcon} style = {styles.icon} />
            <Text style = {styles.text}>Pastarvenses</Text>

            <Menu style = {styles.menu}>
                <MenuTrigger customStyles = {triggerStyles}>
                    <FontAwesomeIcon icon = {faBars} size = {32} style = {{margin: '5%'}} />
                </MenuTrigger>
                <MenuOptions customStyles = {optionsStyles}>
                    <MenuOption text = 'Info. de la app' onSelect = {() => navigation.navigate('Home')} />
                    <MenuOption text = 'Sobre nosotros' onSelect = {() => navigation.navigate('AboutUs')} />
                    <MenuOption text = 'Ayuda' onSelect = {() => navigation.navigate('Help')} />
                </MenuOptions>
            </Menu>
        </View>
    );
} 

export default MainBar;