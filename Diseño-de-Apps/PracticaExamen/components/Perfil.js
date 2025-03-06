import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
/*Pantalla de Perfil: Esta pantalla mostrará información ficticia de un perfil del usuario (nombre, imagen, etc.). d) */
function Perfil( {navigation} ){
    return(
        <View style={styles.background}>
            <ScrollView>
            <Text style={styles.texto}>Perfil</Text>
            <View >
                <View style={styles.container}>
                    <Image source={require('../assets/nekoarc-perfil.png')} style={styles.imagen}/>
                </View>
                <Text style={styles.texto}>Nombre de usario: DJ</Text>
                <Text style={styles.texto}>Email :email@gmail.com</Text>
                <Text style={styles.texto}>contraseña: ********</Text>
                <Text style={styles.texto2}>Editar</Text>
            </View>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    background:{
        margin:10,
        backgroundColor:'#313940',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    cajita:{
        margin: 10,
        padding: 10,
        fontSize: 30,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#313940',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    imagen:{
        padding: 100,
        margin: 1,
        height: 70, 
        width: 70,
        display: 'flex',
        borderTopLeftRadius: 90,
        borderTopRightRadius: 90,
        borderBottomLeftRadius: 90,
        borderBottomRightRadius: 90,
    },
    texto:{
        margin: 20,
        padding: 10,
        paddingHorizontal:0,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#ededed',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    texto2:{
        margin: 20,
        padding: 10,
        paddingHorizontal:0,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#7a7f84',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    }
});

export default Perfil;
