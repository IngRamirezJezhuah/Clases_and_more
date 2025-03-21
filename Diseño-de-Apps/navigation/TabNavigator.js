import React from 'react';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import ProducList from '../screens/ProductList';
import Porfile from '../screens/Porfile';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();  // Cambié 'tab' por 'Tab' para seguir la convención

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} 
            options={{
                tabBarIcon: () =>(
                    <Ionicons name="home-outline" size={30} color={'#62bec0'}/>
                )
            }} />
            <Tab.Screen name="ProducList" component={ProducList} 
            options={{
                tabBarIcon: () =>(
                    <Ionicons name="pricetags-outline" size={25} color={'#62bec0'}/>
                )
            }}/>
            <Tab.Screen name="Cart" component={Cart} 
            options={{
                tabBarIcon: () =>(
                    <Ionicons name="cart-outline" size={30} color={'#62bec0'}/>
                )
            }}/>
            <Tab.Screen name="Porfile" component={Porfile} 
            options={{
                tabBarIcon: () =>(
                    <Ionicons name="person-outline" size={29} color={'#62bec0'}/>
                )
            }}/>
        </Tab.Navigator>
    );
};

export default TabNavigator;
