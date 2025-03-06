import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
/* Pantalla
de Configuración: Esta pantalla debe mostrar configuraciones ficticias (por ejemplo, cambiar el tema, idioma,
etc.) con opciones de íconos para accion y al seleccionar una de esas acciones sea mostrar alertas de la configuracion seleccionada */
function Configuracion( {navigation} ){
    return(
        <View style={styles.background}>
            <ScrollView>
                    <Text style={styles.texto}>Configuración</Text>
                    <View >
                        <View style={styles.container}>
                            <Image source={require('../assets/Iconsapp.png')} style={styles.imagen}/>
                        </View>
                        <Text style={styles.texto}>cambiar tema</Text>
                        <Text style={styles.texto}>Cambiar lenguaje</Text>
                        <Text style={styles.texto}>informacion general</Text>
                        <Text style={styles.texto2}>Version 1.0</Text>
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

export default Configuracion;