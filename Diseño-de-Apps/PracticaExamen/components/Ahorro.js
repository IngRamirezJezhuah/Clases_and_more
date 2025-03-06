import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, Image, ScrollView} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
/*Pantalla de Ahorros: Esta pantalla debe tener un contador que incremente de 10 en 10, simulando un
ahorro, con un ícono para ir sumando este ahorro y otro ícono que sea para ponerlo en 0 de nuevo. c)  */
function Ahorro( {navigation} ){
    const [count, setCount]= useState(0);
    const increment=()=>{
        setCount(count == 0);
        setCount(count + 10);
        
    }
    const reset=()=>{
        setCount(count==0);
    }
    return(
        <View style={styles.background}>
            <ScrollView>
                <Text style={styles.cajita}>Cuenta de Ahorro</Text>
                
                <TouchableOpacity>
                <View style={styles.button}>
                    <View style={styles.container}>    
                    <Ionicons name="wallet-outline" size={80}/>
                    <Text style={styles.cajita} > Total En Cuenta : {count}$ </Text>
                    </View>
                </View>

                </TouchableOpacity>
                <View style={styles.container}>
                    <Image source={require('../assets/piggybank.png')} style={styles.imagen}/>
                </View>


                <TouchableOpacity onPress={increment}>
                <View style={styles.button}>
                    <View style={styles.container}>
                    <Ionicons name="duplicate-outline" size={90}  color="#31394C"/>
                    </View>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={reset}>
                <View style={styles.button}>
                    <View style={styles.container}>
                    <Ionicons name="sync-outline" size={90}  color="#31394C"/>
                    </View>
                </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};
/*
export default function App() {
    return (
    
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
        padding: 0,
        margin: 0
    },
    cajita:{
        margin: 10,
        padding: 10,
        fontSize: 30,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#ededed',
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
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        
    },
    button: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: '#7a7f84',
        padding: 5,
        margin: 10,
        paddingHorizontal: 10,
    }
});

export default Ahorro;