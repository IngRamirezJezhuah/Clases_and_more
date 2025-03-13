import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Cart = () =>{
    return (
        <View style={styles.container}>
            <Text>Esto es carrito!</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Cart;