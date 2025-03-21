import React , { useState } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Modal, Button ,Image } from 'react-native';
import ProductCard from '../components/ProductCard';

const products = [
    {id: '1', name :'Blasphemous', price : '$127.99', imageUrl: 'https://i.pinimg.com/736x/db/77/73/db7773902d2f201abc5737ffab94ab8a.jpg'},
    {id: '2', name :'Hollow Knight', price : '$457.99', imageUrl: 'https://i.pinimg.com/736x/4a/69/f9/4a69f919d54deb48439a26e0e8260cc2.jpg'},
    {id: '3', name :'Cult of lamb', price : '$359.99', imageUrl: 'https://i.pinimg.com/736x/13/ff/c7/13ffc7339177e2572c420f22bcb21672.jpg'},
    {id: '4', name :'Celeste', price : '$266.99', imageUrl: 'https://i.pinimg.com/736x/b4/04/7f/b4047fb88ef7a5013d8980c1fc9c7b62.jpg'},
    {id: '5', name :'Rabit Hole', price : '$283.99', imageUrl: 'https://clan.fastly.steamstatic.com/images/44879425/f004e52a027d5e940948a5ad50a23ddee86beafa_400x225.png'},
    {id: '6', name :'Castle Crasher', price : '$237.99', imageUrl: 'https://i.pinimg.com/736x/af/83/04/af830479e852f529a4338b70a9d5ea8d.jpg'},

];

const ProducList = () =>{
    const [cart, setCart] = useState([]);//cart guarda los productos que el usuario ah agregado al carrito
    const [modalVisible, setModalVisible] = useState(false); // controla la visibilidad del modal que muestra detalles del producto
    const [selectedProduct, setSelectedProduct]= useState(null);//guarda el producto que fue seleccionado para  mostrar as detalles
    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} agregado al carrito.`);
    };
    const handleShowProductDetail = (product) =>{
        setSelectedProduct(product);
        setModalVisible(true);
    }; //ahora usaremos flat list para mostrar los productos disponibles     lo pondremos dentro de las vistas
    const renderProductItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleShowProductDetail(item)}>
            <ProductCard product={item} onAddToCart={handleAddToCart} />
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Productos Disponibles!    ✩°｡ ⋆⸜ 🎧✮ (˶˃ ᵕ ˂˶) .ᐟ.ᐟ</Text>
            <FlatList 
                data={products} 
                renderItem={renderProductItem} 
                keyExtractor={item => item.id} 
                numColumns={2} 
                columnWrapperStyle={styles.columnWrapper} 
                />
                {selectedProduct && (
                    <Modal 
                        animationType='slide' 
                        transparent={true} 
                        visible={modalVisible} 
                        onRequestClose={() => setModalVisible(false)} 
                        >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Image
                                source={{uri: selectedProduct.imageUrl}}
                                style={styles.productImage}
                                />
                                <Text style={styles.productName}>{selectedProduct.name}</Text>
                                <Text style={styles.productPrice}>{selectedProduct.price}</Text>
                                <Text style={styles.productDescription}>
                                    este producto de ejemplo para mostrar detalles, aqui podras poner una descripcio extensa
                                </Text>
                                <Button title='Agregar carrito' onPress={() =>{handleAddToCart(selectedProduct); setModalVisible(false);}}/>
                                <Button title='cerrar' onPress={()=> setModalVisible(false)}/>
                            </View>
                        </View>
                    </Modal>
                )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButton:{
        backgroundColor: '#625dff',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    cajita: {
        fontFamily: 'sans-serif-medium',
        fontWeight: '600',
        fontSize: 7,
    },
    bordes:{
        backgroundColor: '#fce573',
        margin: 20,
        padding: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius:30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    sectionTitle: {
        backgroundColor: '#625dff',
        padding: 50,
        fontSize: 22,
        fontWeight: '600',
        color: '#ffff',
        marginBottom: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius:30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    modalContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(0,0,0,0.5',
    },
    modalContent :{
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    productImage: {
        width: 200,
        height: 200,
        borderRadius: 15,
        marginBottom: 20,
    },
    productPrice: {
        fontSize: 18,
        color: '#625dff',
        marginBottom:10,
    },
    productName:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    productDescription: {
        fontSize: 16,
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default ProducList;