import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ResultBar from '../components/molecules/ResultBar';
import ResultTab from '../navegation/ResultTab';

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
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },

    mainContent: {
        flex: 37,
        backgroundColor: 'white',
        width: '100%'
    }
});

const ResultMenu = ({route, navigation}) => {
    return(
        <SafeAreaView style = {styles.container}>
            <StatusBar backgroundColor = '#174c72'/>
            <ResultBar containerStyle = {styles.header} name = {route.params.itemData.scientificName} navigation = {navigation} />
            <View style = {styles.mainContent}>
                <ResultTab itemData = {route.params.itemData} />
            </View>
        </SafeAreaView>
    );
} 

export default ResultMenu;