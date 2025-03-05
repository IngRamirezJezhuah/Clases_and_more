import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import  HomeScreen from './components/HomeScreen';
import Ahorro  from './components/Ahorro';
import  Perfil  from './components/Perfil';
import Configuracion  from './components/conf';

export default function App() {
    const Stack = createStackNavigator();
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='Ahorro' component={Ahorro}/>
            <Stack.Screen name='Perfil' component={Perfil}/>
            <Stack.Screen name='Configuracion' component={Configuracion}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
