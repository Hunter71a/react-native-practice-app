import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from './components/ImageDetail';

const ImageScreen = () => {
  

  return (
    <View>
      <Text>Image Screen</Text>
      <ImageDetail 
      title='Forest'
      imageSource={require('../../assets/img/forest.jpg')}
      imageScore='8'
      />
      <ImageDetail 
      title='Beach'
      imageSource={require('../../assets/img/beach.jpg')}
      imageScore='6'
      />
      <ImageDetail 
      title='Mountain'
      imageSource={require('../../assets/img/mountain.jpg')}
      imageScore='7'
      />
    </View> 
  );
};

const styles = StyleSheet.create({

});

export default ImageScreen;