import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
//import {createNativeStackNavigator} from "@react-navigation/native-stack";

export default function App() {
  return (
    <HomeScreen></HomeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#562f2f',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  Text:{
    color: '#ddacf7', 
    fontSize: 9
  },
  texto2:{
    fontFamily: 'sans-serif-medium',
    fontWeight: '600',
    fontSize: 20,
    color: '#ffffff'
  }
});
