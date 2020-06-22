import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imageSource, imageScore }) => {
  return <View>
    <Image source={imageSource} />
    <Text>  {title}         Image Score: {imageScore}</Text>
  </View>

};

const styles = StyleSheet.create({

});

export default ImageDetail;