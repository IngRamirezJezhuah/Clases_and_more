import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image , ScrollView} from 'react-native';
import React from 'react';

function HomeScreen ( {navigation} ) {
    return(
        <View style={styles.background}>
            <ScrollView>
            <StatusBar style={styles.navigator} />

            <View style={styles.container}>
                <TouchableOpacity  onPress={() => navigation.navigate('Ahorro')}>
                    <View style={styles.button}>
                        <Text style={styles.text}> Ir a ahorro</Text>
                    </View>
                </TouchableOpacity>
                <Image source={require('../assets/Nekoarck-money.png')} style={styles.imagen}/>
            </View>


            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                    <View style={styles.button}>
                        <Text style={styles.text}> Ir a Perfil</Text>
                    </View>
                </TouchableOpacity>
                <Image source={require('../assets/nekoarc-perfil.png')} style={styles.imagen}/>
            </View>

            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Configuracion')}>
                    <View style={styles.button}>
                        <Text style={styles.text}> Ir a configuracion</Text>
                    </View>
                </TouchableOpacity>
                <Image source={require('../assets/neko-арк.png')} style={styles.imagen}/>
            </View>

            </ScrollView>
        </View>
    );
};
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
    background:{
        margin:10,
        padding:10,
        backgroundColor:'#313940',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7a7f84',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 5,
        margin: 5,
    },
    button: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor:'#ededed',
        padding: 10,
        margin: 5,
        paddingHorizontal: 5,
    }, 
    text:{
        textAlign: 'center'
    },
    navigator:{
        backgroundColor:'#ededed'
    },
    imagen:{
        padding: 100,
        margin: 10,
        height: 70, 
        width: 70,
        display: 'flex',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        
    }
    
});

export default HomeScreen;