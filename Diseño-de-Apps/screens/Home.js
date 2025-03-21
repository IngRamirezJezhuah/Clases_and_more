import React, { useState } from "react";
import { View, Text, FlatList, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

const categories = [
    { id: "1", title: "Metrodivania", imageUrl: "https://i.pinimg.com/736x/83/4d/d0/834dd00a193823209da1aa3994331959.jpg" },
    { id: "2", title: "Rpg", imageUrl: "https://i.pinimg.com/736x/f7/1d/89/f71d899e4e5ec36a56b317cf0cc481a4.jpg" },
    { id: "3", title: "Rhytmics", imageUrl: "https://i.pinimg.com/originals/ef/7d/ba/ef7dbaa77877c57b152b3e9aa8ee20ab.gif" },
    { id: "4", title: "Shooter", imageUrl: "https://i.pinimg.com/736x/a5/57/d1/a557d147c00ea17242d8bf27697bf93c.jpg" }
];

const carouselImages = [
    "https://i.pinimg.com/736x/69/a9/ea/69a9ea1e085adec65a1d9a2916127d4a.jpg",
    "https://i.pinimg.com/736x/b6/6d/40/b66d40a315f5f4bcab965a59b512dca8.jpg",
    "https://i.pinimg.com/736x/7e/35/8b/7e358b0235214766c57030a8f3a9ee8b.jpg",
];

const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const goToNextImage = () => {
        if (currentImage < carouselImages.length - 1) {
        setCurrentImage(currentImage + 1);
        } else {
        setCurrentImage(0);
        }
    };

    const goToPrevImage = () => {
        if (currentImage > 0) {
        setCurrentImage(currentImage - 1);
        } else {
        setCurrentImage(carouselImages.length - 1);
        }
    };

    return (
        <ScrollView style={styles.container}>
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>¡Bienvenido a Djxs4n Friki WebShop ⸜(｡˃ ᵕ ˂ )⸝♡!</Text>
            <Text style={styles.welcomeSubText}>Descubre las mejores ofertas de la temporada ദ്ദി •⩊• ) </Text>
        </View>

        <Text style={styles.sectionTitle}>Explora nuestras categorías</Text>
        <FlatList
            data={categories}
            renderItem={({ item }) => (
            <View style={styles.categoryItem}>
                <Image source={{ uri: item.imageUrl }} style={styles.categoryImage} />
                <Text style={styles.categoryTitle}>{item.title}</Text>
            </View>
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
        />

        <Text style={styles.sectionTitle}>Galería de imágenes</Text>
        <View style={styles.carouselContainer}>
            <TouchableOpacity onPress={goToPrevImage} style={styles.carouselButtonLeft}>
            <Text style={styles.carouselButtonText}>‹</Text>
            </TouchableOpacity>
            <Image source={{ uri: carouselImages[currentImage] }} style={styles.carouselImage} />
            <TouchableOpacity onPress={goToNextImage} style={styles.carouselButtonRight}>
            <Text style={styles.carouselButtonText}>›</Text>
            </TouchableOpacity>
        </View>
        
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    categoryItem: {
        alignItems: "center",
        marginRight: 20,
    },
    categoryImage: {
        width: 110,
        height: 110,
        borderRadius: 15,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: "#ddd",
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#656568",
    },
    categoriesContainer: {
        marginBottom: 30,
    },
    carouselContainer: {
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        marginBottom: 30,
    },
    carouselImage: {
        width: 300,
        height: 150,
        borderRadius: 15,
    },
    carouselButtonLeft: {
        position: 'absolute',
        top: "50%",
        left: 10,
        transform: [{ translateY: -20 }],
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 15,
        borderRadius: 50,
        zIndex: 1,
    },
    carouselButtonRight: {
        position: 'absolute',
        top: "50%",
        right: 10,
        transform: [{ translateY: -20 }],
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 15,
        borderRadius: 50,
    },
    carouselButtonText: {
        color: "white",
        fontSize: 24,
    },
    welcomeContainer: {
        backgroundColor: "#625dff",
        borderRadius: 15,
        paddingVertical: 25,
        paddingHorizontal: 20,
        marginBottom: 20,
        alignItems: "center",
    },
    welcomeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        marginBottom: 5,
    },
    welcomeSubText: {
        fontSize: 18,
        color: "white",
        fontWeight: "500",
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "600",
        color: "#333",
        marginBottom: 10,
    },
});

export default Home;