import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Slider, ScrollView } from 'react-native';
import ColorCounter from '../screens/components/ColorCounter';
import ColorCounter2 from '../screens/components/ColorCounter2';
import SliderComponent from '../screens/components/SliderComponent';
import AutoScrollFlatList from 'react-native-autoscroll-flatlist';




const ColorPickerScreen = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [blueSliderValue, setBlueSliderValue] = useState(0);
  const [redSliderValue, setRedSliderValue] = useState(0);
  const [greenSliderValue, setGreenSliderValue] = useState(0);
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);




  return <ScrollView>
    <View style={styles.pageStyle}>
      <Text style={styles.titleStyle}>Color Picker</Text>
      <View style={styles.container_slider_red}>
        <Text>Red Slider </Text>
        <Slider
        thumbTintColor='red'
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={value => setRedSliderValue(Math.floor(value))}
        />
        <Text>Red Value: {redSliderValue}</Text>
      </View>

      <View style={styles.container_slider_green}>
        <Text>Green Slider </Text>
        <Slider
        thumbTintColor='green'
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={value => setGreenSliderValue(Math.floor(value))}
        />
        <Text>Green Value: {greenSliderValue}</Text>
      </View>

      <View style={styles.container_slider_blue}>
        <Text>Blue Slider </Text>
        <Slider
          thumbTintColor='blue'
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={value => setBlueSliderValue(Math.floor(value))}
        />
        <Text>Blue Value: {blueSliderValue}</Text>
      </View>
      <View
        style={{
          backgroundColor: `rgb(${redSliderValue},${greenSliderValue},${blueSliderValue})`,
          height: 200,
          width: 200,
        }}><Text style={styles.colorText}>{redSliderValue},{greenSliderValue},{blueSliderValue}</Text></View>
    </View>
  </ScrollView>

}

const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    alignItems: 'center',
  },
  colorSwatch: {
    height: 200,
    width: 200,
    },
    container_slider_red: {
      width: '50%',
      height: 'auto',
      margin: 20,
      borderWidth: 3,
      borderColor: 'red',
    },
    container_slider_green: {
      width: '50%',
      height: 'auto',
      margin: 20,
      borderWidth: 3,
      borderColor: 'green',
    },
    container_slider_blue: {
      width: '50%',
      height: 'auto',
      margin: 20,
      borderWidth: 3,
      borderColor: 'blue',
    },


  button: {
    flex: 1,
    flexDirection: 'column',
    margin: 2,
    justifyContent: 'space-around',

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

  colorText: {
    fontSize: 20,
    color: '#FFF',
    padding: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto'

  },
  titleStyle: {
    fontSize: 20,
    paddingTop: 8,
  },
  textStyle: {
    fontSize: 25,
  }

});

export default ColorPickerScreen;