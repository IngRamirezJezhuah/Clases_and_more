import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from '@react-navigation/TabNavigation';

export default function App() {
    return (
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    );
}
