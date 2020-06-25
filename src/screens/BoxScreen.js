import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return <View style={styles.viewStyle}>
    <Text style={styles.textOneStyle}>Child #1</Text>
    <Text style={styles.textTwoStyle}>Child #2</Text>
    <Text style={styles.textThreeStyle}>Child #3</Text>
  </View>

}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    alignItems: "center",
    flexDirection: 'column',
    height: 200,
    //   justifyContent: 'flex-start'
  },
  textOneStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: 3,
    borderColor: 'red',
    padding: 3,
    backgroundColor: 'yellow',
    // marginVertical: 10,
    //  marginHorizontal: 2,
  },
  textTwoStyle: {
    // ...StyleSheet.absoluteFillObject,
     position: 'absolute',
    flex: 1,
    alignSelf: 'stretch',
    //  flex: 'justifyContent',
    borderWidth: 3,
    borderColor: 'red',
    padding: 3,
    fontSize: 18,
    backgroundColor: 'pink',
    // marginVertical: 10,
    //  marginHorizontal: 2,
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
  },
  textThreeStyle: {
    top: -3,
    flex: 1,
  //  alignSelf: 'flex-end',
    //  flex: 'justifyContent',
    borderWidth: 3,
    borderColor: 'red',
    padding: 3,
    // marginVertical: 10,
    //  marginHorizontal: 2,
  }

});

export default BoxScreen;