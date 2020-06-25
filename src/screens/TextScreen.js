import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';



let warningMessage = '';

const TextScreen = () => {
  const [currentText, setCurrentText] = useState('Shut Up Chump!');
  const errorMessage = 'Password must be longer than 5 characters';




const setPassword = (text) => {
  setCurrentText(text);
  if (text.length < 6 && text.length > 0) {
    warningMessage = errorMessage;    
  }
  else {
    warningMessage = '';
  }
};



  return <View style={styles.pageStyle}>
    <Text style={styles.titleStyle}>Enter Password:</Text>
    <TextInput
      autoCapitalize='none'
      autoCorrect={false}
      style={styles.input}
      value={currentText}
      onChangeText={(text) => { setPassword(text) }}
    />
    <Text>The Password is: {Array(currentText.length + 1).join('*')}</Text>
<Text>{warningMessage}</Text>
{currentText.length < 6 && currentText.length > 0 ? <Text>Password must be longer than 5 characters</Text> : null}

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