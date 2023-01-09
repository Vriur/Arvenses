import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Card from '../atoms/Card'
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
});

const CardList = (props) => {
    const data = props.data;
    
    const renderItem = ({item}) => (
        <Card cardData = {item} navigation = {props.navigation} />
    );

    return(
        <View style = {styles.container}>
            <FlatList data = {data} renderItem = {renderItem} keyExtractor = {item => item.id} numColumns = {2} />
        </View>
    );
} 

export default CardList;