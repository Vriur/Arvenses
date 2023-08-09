import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './../screens/Home';
import SearchMenu from './../screens/SearchMenu'
import AboutUs from './../screens/AboutUs'
import Help from './../screens/Help'
import ResultMenu from '../screens/ResultMenu';
import PdfReader from '../screens/PdfReader';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions = {{headerShown: false}}>
      <Stack.Screen name = 'Home' component = {Home} />
      <Stack.Screen name = 'SearchMenu' component = {SearchMenu} />
      <Stack.Screen name = 'AboutUs' component = {AboutUs} />
      <Stack.Screen name = 'Help' component = {Help} />
      <Stack.Screen name = 'ResultMenu' component = {ResultMenu} />
      <Stack.Screen name = 'PdfReader' component = {PdfReader} />
    </Stack.Navigator>
  );
};

export default MyStack;