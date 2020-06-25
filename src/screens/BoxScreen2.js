import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen2 = () => {
  return <View style={styles.viewStyle}>
    <View style={styles.textOneStyle}><Text >Child #1</Text></View>
    <View style={styles.textTwoStyle}><Text >Child #2</Text></View>
    <View style={styles.textThreeStyle}><Text>Child #3</Text></View>
  </View>

}


const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    height: 200,
   // alignItems: 'stretch',
    justifyContent: 'space-between',
    borderWidth: 3,
    borderColor: 'black',
  },

  textOneStyle: {
    // flex: 1,
    backgroundColor: 'orange',
    borderWidth: 3,
    borderColor: 'green',
    height: 100,
    width: 100,
  },
  textTwoStyle: {
    //flex: 1,
    height: 100,
    width: 100,
    backgroundColor: 'green',
    borderWidth: 3,
    borderColor: 'orange',
    alignSelf: 'flex-end'
  },
  textThreeStyle: {
    //  flex: 1,
    height: 100,
    width: 100,
    backgroundColor: 'purple',
    borderWidth: 3,
    borderColor: 'green',
  }


});

// const styles = StyleSheet.create({
//   viewStyle: {
//     borderWidth: 3,
//     borderColor: 'black',
//     alignItems: "center",
//     flexDirection: 'column',
//     height: 200,
//     //   justifyContent: 'flex-start'
//   },
//   textOneStyle: {
//     flex: 1,
//     alignSelf: 'stretch',
//     borderWidth: 3,
//     borderColor: 'red',
//     padding: 3,
//     backgroundColor: 'yellow',
//     // marginVertical: 10,
//     //  marginHorizontal: 2,
//   },
//   textTwoStyle: {
//     // ...StyleSheet.absoluteFillObject,
//      position: 'absolute',
//     flex: 1,
//     alignSelf: 'stretch',
//     //  flex: 'justifyContent',
//     borderWidth: 3,
//     borderColor: 'red',
//     padding: 3,
//     fontSize: 18,
//     backgroundColor: 'pink',
//     // marginVertical: 10,
//     //  marginHorizontal: 2,
//     // top: 0,
//     // bottom: 0,
//     // left: 0,
//     // right: 0,
//   },
//   textThreeStyle: {
//     top: -3,
//     flex: 1,
//   //  alignSelf: 'flex-end',
//     //  flex: 'justifyContent',
//     borderWidth: 3,
//     borderColor: 'red',
//     padding: 3,
//     // marginVertical: 10,
//     //  marginHorizontal: 2,
//   }

// });

export default BoxScreen2;