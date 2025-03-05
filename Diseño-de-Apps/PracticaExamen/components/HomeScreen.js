import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
function HomeScreen ( {navigation}) {
    return(
        <View>
            <View>
                <Text>Ya jalo </Text>
            </View>

            <TouchableOpacity  onPress={() => navigation.navigate('Ahorro')}>
                <View style={styles.button}>
                    <Text style={styles.text}> Ir a ahorro</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                <View style={styles.button}>
                    <Text style={styles.text}> Ir a Perfil</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Configuracion')}>
                <View style={styles.button}>
                    <Text style={styles.text}> Ir a configuraion</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
/*
export default function App() {
    return (
    <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
    </View>
    );
}*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 9,
        borderBottomLeftRadius: 9,
        borderBottomRightRadius: 50,
        backgroundColor: '#bad3ba',
        borderRadius: 5,
        padding: 15,
        margin: 10,
        paddingHorizontal: 50,
    }, 
    text:{
        textAlign: 'center'

    }
});

export default HomeScreen;