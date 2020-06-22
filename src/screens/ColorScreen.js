import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AutoScrollFlatList from 'react-native-autoscroll-flatlist';
//import { FlatList } from 'react-native-gesture-handler';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  const addColor = () => setColors([...colors, randomColor()]);
  console.log(colors);

  return <View style={styles.pageStyle}>
    <View style={styles.button}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={addColor}
      >
        <View style={styles.countContainer}>
          <Text style={styles.buttonTextStyle}>Create a color!</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={{ height: 100, width: 100, backgroundColor: colors[colors.length - 1] }} />
    <View style={styles.listView}>
      <AutoScrollFlatList
        keyExtractor={item => item}
        data={colors}
        scrollToEnd={{ animate: false }}
        isAutoScrolling={false}
        renderItem={({ item }) => {
          return <View style={{ height: 100, width: 100, backgroundColor: item }}><Text style={styles.colorContainer}>{item}</Text></View>
        }}
      />
    </View>
  </View>

}

const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};


const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    //   justifyContent: 'flex-start',
  },

  listView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',

  },

  button: {
    //  flex: 1,
    //   flexDirection: 'column',
    //  justifyContent: 'flex-start',

    //  borderRadius: 10

  },

  buttonStyle: {
    backgroundColor: 'black',
    width: 180,
    height: 60,
    borderRadius: 10,
    margin: 10,
  },
  countContainer: {
    alignItems: "center",
    justifyContent: 'center',
    padding: 10,
    height: '100%',
    width: '100%'

  },
  colorContainer: {
    alignItems: "center",
    justifyContent: 'center',
    padding: 10,
    height: '100%',
    width: '100%',
    fontSize: 9,
    color: '#fff'

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

export default ColorScreen;