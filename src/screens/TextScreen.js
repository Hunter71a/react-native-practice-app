import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';


const TextScreen = () => {
  return <View style={styles.pageStyle}>
     <Text style={styles.titleStyle}>Text Screen</Text>
    <TextInput style={styles.input}/>
   
  </View>
}

const styles = StyleSheet.create({
  input: {
    width: '60%',
    margin: 15,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 16,
  },
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

export default TextScreen;