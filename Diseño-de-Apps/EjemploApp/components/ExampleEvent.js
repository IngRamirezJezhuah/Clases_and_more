import * as React from 'react';
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const ExampleEvent =({navigation}) => {
    //poner primero la funcion dentro de la funcion principal antes del retunr para que lo pueda renderizar
    const handleChangeText = (text) =>{
        Alert.alert(`Texto cambiado a ${text}`);
    }
    return (
        <View style={styles.cuerpo}>
            <Button 
                    title='ir a Counter'
                    onPress={()=> navigation.goBack()}  //Reutilizamos las la base
                    />
            <View style={styles.coso}>
                <Text style={styles.texto}>Prueba Presionando los botones</Text>
            </View>
            
            <TouchableOpacity onPress={()=>{Alert.alert("boton 1 presionado")}}>
            <View style={styles.button}>
                <Text style={styles.texto}>Boton 1ˎˊ˗</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{Alert.alert("boton 2 presionado")}}>
            <View  style={styles.button}>
                <Text style={styles.texto}>Boton 2ˎˊ˗</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity >
            <View  style={styles.button}>
            <TextInput placeholder='Escribe algo aqui' onChangeText={handleChangeText} />
            </View>
            </TouchableOpacity>
            
        </View>
    )
}
/*
return (
        <View style={styles.cuerpo}>
            <TouchableOpacity onPress={()=>{Alert.alert("btn2")}}>
            <View style={styles.coso}>
                <Text style={styles.texto}>Prueba Presionando los botones</Text>
            </View>
            </TouchableOpacity>
            <Button style={styles.button} title="Boton 1" onPress={()=> Alert.alert("⋆౨ৎ˚⟡˖ ࣪ boton 1 presionado ⋆౨ৎ˚⟡˖ ࣪")}/>
            <Text> </Text>
            <Button style={styles.button} title="boton 2" onPress={()=> Alert.alert("⋆౨ৎ˚⟡˖ ࣪boton 2 presionado⋆౨ৎ˚⟡˖ ࣪")}/>
            <Text> </Text>
            <Button title='Evento change' onPress={handlePress}/>
        </View>
    )
*/ 
const styles = StyleSheet.create({
    cuerpo:{
        flex: 1, alignItems: 'center', 
        justifyContent: 'center' ,
        backgroundColor: '#dae1da',
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
    texto:{
        color:'#fcfcfc',
        padding: 10,
    },
    coso:{
        backgroundColor:'#a5ada5',
        margin: 20,
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius:5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    }
});

export default ExampleEvent;