import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; 
import { Button } from 'react-native';

// para la parte de usar el view es el equivalente del div en el html
function HomeScreen( {navigation} ) {//ponemos dento de navigation ya que es lo que nos va a permitir movernos
return (//return se abre con parentesis para dentro de este
    <View style={styles.container}>
        
        
        <View style={styles.cabeza}>
        <Text style={styles.Text}>Esta es la cabeza principal</Text>
        </View>
        <View style={styles.coso}>
        <Text style={styles.texto2}>
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠦⣄⣠⠴⠒⠒⠉⠒⠶⣄⡏⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣠⡞⣡⠀⢠⡀⠀⢦⡀⢹⣷⣼⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡿⠁⣿⠟⣷⣿⢦⡈⣇⠀⢻⣿⣈⢷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡇⣶⣻⣀⠘⣿⣀⣹⣿⣰⣼⡟⣯⠟⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⣿⡿⠿⠋⠉⠋⠛⢿⣿⣿⡇⠈⢦⡸⣾⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠛⣷⣄⠀⠀⠀⠀⣸⠟⠃⠉⠀⠈⢷⣩⡻⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠹⡄⠈⠙⠒⢤⣴⣾⠉⠁⣀⡀⠀⠀⠀⠹⣟⢮⡳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⠀⣿⠀⣀⣴⣿⡏⣀⡬⠟⠁⠈⣆⠀⠀⠀⠘⢧⡉⢿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡿⣿⠀⢻⣫⠉⣽⡟⠉⡅⢀⣆⠀⢠⣿⠀⠀⠀⠀⠀⠹⣦⡉⠻⢦⡀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⢗⣿⢀⡷⠁⣸⡿⠁⠀⠀⢸⣿⠃⣄⣈⡆⠀⠀⠀⠀⠀⠈⠫⣱⠦⣌⡓⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣇⣾⣿⢟⡇⢀⣿⡇⠀⢀⣰⢸⡌⢿⣿⢻⡟⣃⠀⠀⠀⠰⡂⠠⠌⠲⢤⣙⣻⠛⠓⠶⢦⡤⣄⣀⡀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣻⣿⠏⣾⠃⢸⢽⡇⠀⡏⠁⡶⠁⠈⣿⣎⡷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠒⠶⢤⣀⠈⠻⣄⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣴⣿⠟⠁⡼⠀⣿⠀⡟⢸⡇⢰⠃⢸⠇⠀⠀⢹⣷⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣷⣄⠘⣧⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣾⠟⠋⠀⣠⡼⢁⣼⣿⢠⣧⢾⡇⠘⡀⠸⡇⠀⠀⠘⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡉⠚⢧⠹⣷⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡴⠖⢋⣽⡿⠥⠖⠚⠉⢁⣴⣾⣿⠃⢈⠀⢸⠇⠀⠁⠀⢳⡀⠀⠀⣿⣿⣽⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠀⠀⠘⢧⡇⠀
        ⠀⠀⠀⠀⠀⠀⣀⣤⣾⠛⠁⣠⡼⠋⠁⠀⢀⣀⢀⣴⣿⣿⠟⠁⠀⠀⣷⠋⠂⠀⠀⠀⠀⠳⡀⠀⢹⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡿⠀⠀⠀⢸⠧⠀
        ⠀⠀⢀⡠⠖⠋⣩⠶⢋⡴⠋⠁⠀⠀⠿⣭⡿⣿⠿⠟⢉⣷⣄⠀⢀⣼⣿⡄⠀⠀⠀⠀⠀⢀⣹⠄⠀⢹⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⠀⠀⠀⠀⠐⡧
        ⠀⠀⣸⣄⣴⣛⣡⠞⠋⠀⠀⠀⠀⠀⠀⠀⣭⣤⣴⣾⣿⣿⣿⣷⣿⣿⣿⣷⣤⣴⣶⣾⣿⣿⣿⣆⠀⢈⣿⣷⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⢑
        ⠀⠰⣏⡿⢫⡞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣹⠿⠿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⢀
        ⠀⢀⣿⡵⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⣿⣿⣿⣿⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⢀⡜⠀⠀⠀⠀⠀⠀⢀⠎
        ⢠⢸⡟⠹⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡧⠤⢙⠛⠋⠛⠛⠿⠿⢿⡟⠛⠉⠁⠀⠀⠀⠀⠀⠠⠐⠀⠀⠀⠀⠀⠀⠀⢀⡼⢀⠀⠄⠀⠀⡀⡀⠀⠀
        ⢸⣎⡇⠀⠳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⠀⡀⢰⡅⠀⠀⠀⠀⠀⡝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⡿⢋⠞⠀⢠⣮⠎⠀⠀⠀
        ⠀⢿⣷⠀⠀⠈⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣶⣿⣇⠀⠀⠀⠀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡾⠋⣠⠋⢀⣴⠟⠁⠀⠀⠀⠀
        ⠀⠘⣏⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⢹⣻⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠟⢡⠞⣁⣴⠟⠁⠀⠀⠀⠀⠀⠀
        ⠀⠀⠸⡄⠳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⢄⡀⠀⠀⠘⣿⣿⡯⢶⢧⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⢁⣴⠿⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠹⡄⠙⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠢⣄⠈⢿⣿⡯⣝⣾⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⡯⢖⡿⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠹⡄⠀⠑⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⢻⣿⣿⣽⣿⡇⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⢴⣶⠿⠋⠁⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠘⢦⡀⠀⠙⠢⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣻⢿⣿⡍⠑⠒⠒⣒⣾⣷⠿⠛⣋⡵⠚⠁⠀⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠙⠢⣄⡀⠀⠙⠓⠒⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣷⡚⠛⠉⠁⠀⠀⠐⠋⢀⡀⢀⡤⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠙⠋⠛⠛⣹⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣻⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⢿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⡏⠸⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⠁⠀⢹⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡏⠀⠀⠈⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀⠀⠀⢼⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⠀⠀⠀⠀⣼⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⣿⣿⣿⠀⠀⠀⢀⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⡆⠀⠀⣾⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣷⠀⠀⠸⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣻⡇⠀⠀⠈⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣟⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        </Text> 
        </View>
        <View style={styles.coso}>
            <Text>moverse entre paginas</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('ExampleEvent')}>
        <View style={styles.button}>
            <Text>
                ir a ExampleEvent
            </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Counter')}>
        <View style={styles.button}>
            <Text>
                ir a Counter
            </Text>
        </View>
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin:0,
        flex: 1,
        backgroundColor: '#5888c1',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    Text:{
        color: '#33537a', 
        fontSize: 25
    },
    texto2:{
        fontFamily: 'sans-serif-medium',
        fontWeight: '600',
        fontSize: 7,
        color: '#b0fced'
    },
    coso:{
        backgroundColor: '#65A0E5',
        margin: 20,
        padding: 10,
        borderTopLeftRadius: 50,
        borderTopRightRadius:50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    cabeza:{
        backgroundColor: '#A0C7F5',
        padding: 15,
        margin: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius:5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 50,
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
    }
});

export default HomeScreen;//esto es importante para que siempre se importe
//por que se separa en componentes tengo el codigo mas organizado


/*
<Button 
        title='ir a Counter'
        onPress={()=> navigation.navigate('Counter')}  //Reutilizamos las la base
        />
*/