import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchTab from '../navegation/SearchTab';
import MainBar from './../components/MainBar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#174c72',
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        flex: 3,
        width: '100%',
        backgroundColor: '#41ade7',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },

    mainContent: {
        flex: 37,
        backgroundColor: 'white',
        width: '100%'
    }
});

const SearchMenu = ({navigation}) => {
    return(
        <SafeAreaView style = {styles.container}>
            <StatusBar backgroundColor = '#174c72'/>
            <MainBar navigation = {navigation} containerStyle = {styles.header} />
            <View style = {styles.mainContent}>
                <SearchTab navigation = {navigation} />
            </View>
        </SafeAreaView>
    );
} 

export default SearchMenu;