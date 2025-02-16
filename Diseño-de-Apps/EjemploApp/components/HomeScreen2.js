import * as React from 'react';
import { View, Text } from 'react-native';
import {
    createStaticNavigation,
    useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';

function HomeScreen() {
    const navigation = useNavigation();
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button onPress={() => navigation.navigate('Details')}>
            Go to Details
        </Button>
        </View>
    );
}   
export default HomeScreen;
// ... other code from the previous section