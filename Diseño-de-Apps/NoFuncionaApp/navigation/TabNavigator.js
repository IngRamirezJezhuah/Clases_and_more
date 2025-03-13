import React from 'react';
import Home from './screens/Home';
import ProducList from './screens/ProductList';
import Cart from './screens/Cart';
import Porfile from './screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

const TabNavigator = () =>{
    return (
        <Tab.Navigator>
            <Tab.Screen name = "Home" component={Home}/>
            <Tab.Screen name = "ProducList" component={ProducList}/>
            <Tab.Screen name = "Cart" component={Cart}/>
            <Tab.Screen name = "Porfile" component={Porfile}/>
        </Tab.Navigator>
    );
};

export default TabNavigator;