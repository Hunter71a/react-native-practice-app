import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(prevCount => prevCount + 1);  //advantage don't need to know name of count variable? does this help security or make the code easier to maintian?
  const decrease = () => setCount(count - 1);  // alternate method of setting count -- seems more direct to me

  return <View style={styles.pageStyle}>
    <View>
      <Text style={styles.titleStyle} >Counter Screen</Text>
    </View>
    <Text style={styles.textStyle}>Current Count: {count}</Text>
    <View style={styles.button}>
      <TouchableOpacity
        style={styles.buttonStyle}
        title='Increase'
        onPress={increase}>
        <View style={styles.countContainer}>
          <Text style={styles.buttonTextStyle}>INCREASE</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.button}>
      <TouchableOpacity
        style={styles.buttonStyle}
        title='Decrease'
        onPress={decrease}
      >
        <View style={styles.countContainer}>
          <Text style={styles.buttonTextStyle}>REDUCE</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
};

const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'column',
   justifyContent: 'space-around',

    borderRadius: 10

  },

  buttonStyle: {
    backgroundColor: 'purple',
    width: 150,
    height: 60,
    borderRadius: 10,
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

export default CounterScreen;