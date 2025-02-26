import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
//import ExampleEvent from './components/ExampleEvent';
//import HomeScreen from './components/HomeScreen';
//import {createNativeStackNavigator} from "@react-navigation/native-stack";
//<HomeScreen></HomeScreen>
export default function App() {
  return (
    <Counter></Counter>
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
