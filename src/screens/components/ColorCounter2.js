import React from 'react';
import {View, Text, StyleSheet, Button, Slider} from 'react-native';

const ColorCounter2 = ({color, onIncrease, onDecrease, value }) => {


  return <View style={styles.container}>
    <Text style={styles.textStyle}>   {color} : {value}</Text>
  
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

export default ColorCounter2;