import { Image, StyleSheet } from 'react-native';
import React from 'react';

export default function ImageViewer ({PlaceholderImageSource, selectedImage}) {
    const imageSource = 
    selectedImage !== null ? { uri: selectedImage }
    : PlaceholderImageSource;

  return (
    // <Image source={require('../assets/expo-bg2.png')} style={styles.image} />
     <Image source={imageSource} style={styles.image} />

  )
}


const styles = StyleSheet.create({
    image: {
        width: 410,
        height: 540,
    }
})