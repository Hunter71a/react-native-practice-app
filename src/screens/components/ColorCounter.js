import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const ColorCounter = () => {
  return <View style={styles.button}>
      <TouchableOpacity
        style={styles.buttonStyle}
       // title='Decrease'
      //  onPress={decrease}
      >
        <View style={styles.countContainer}>
          <Text style={styles.buttonTextStyle}>Increase Red</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
       // title='Decrease'
      //  onPress={decrease}
      >
        <View style={styles.countContainer}>
          <Text style={styles.buttonTextStyle}>Reduce Red</Text>
        </View>
      </TouchableOpacity>
    </View>
   }

const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    margin: 2,
  // justifyContent: 'space-around',

    borderRadius: 10

  },

  buttonStyle: {
    backgroundColor: 'purple',
    width: 150,
    height: 60,
    borderRadius: 10,
    margin: 1,
  },
  countContainer: {
    alignItems: "center",
    justifyContent: 'center',
    padding: 10,
    height: '100%',
    width: '100%'

  },

  buttonTextStyle: {
    fontSize: 20,
    color: '#FFF',

  },
  titleStyle: {
    fontSize: 30,
    padding: 20,
  },
  textStyle: {
    fontSize: 25,
  }

});

export default ColorCounter;