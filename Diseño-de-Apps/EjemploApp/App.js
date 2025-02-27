import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExampleEvent from './components/ExampleEvent';
import HomeScreen from './components/HomeScreen';
//import {createNativeStackNavigator} from "@react-navigation/native-stack";
//<HomeScreen></HomeScreen>
export default function App() {
  const Stack = createStackNavigator();
  /* <navigationContainer> es para contener las pantallas de navegacion como dice su nombre
  
  */
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='ExampleEvent' component={ExampleEvent}/>
        <Stack.Screen name='Counter' component={Counter}/>
      </Stack.Navigator>
    </NavigationContainer>
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
