import React from 'react';
import {View, Text, StyleSheet, Button, Slider} from 'react-native';

const SliderComponent = (props) => {


  return <View style={styles.container}>
    <Text style={styles.textStyle}>   {color} : {value}</Text>
    <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={255}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={value => setSliderValue(Math.floor(value))}
      />
      <Text>Slider Value: </Text>
    <Button 
    onPress={() => onIncrease()}
    title={`INCREASE ${color}`} />
    <Button 
      onPress={() => onDecrease()}
    title={`REDUCE ${color}`} />
  </View>
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    alignContent: 'center'
   // alignItems: 'center'
   //justifyContent: 'center'
  },
  textStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
   }
});

export default SliderComponent;