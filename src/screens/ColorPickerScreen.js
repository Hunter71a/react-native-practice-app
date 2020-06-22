import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Slider, ScrollView } from 'react-native';
import ColorCounter from '../screens/components/ColorCounter';
import ColorCounter2 from '../screens/components/ColorCounter2';

const COLOR_INCREMENT = 30;

const ColorPickerScreen = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [blueSliderValue, setBlueSliderValue] = useState(0);
  const [redSliderValue, setRedSliderValue] = useState(0);
  const [greenSliderValue, setGreenSliderValue] = useState(0);
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);

  const setColor = (color, change) => {

    switch (color) {
      case 'red':
        redValue + change > 255 || redValue + change < 0 ? null : setRedValue(redValue + change);
        return;
      case 'blue':
        blueValue + change > 255 || blueValue + change < 0 ? null : setBlueValue(blueValue + change);
        return;
      case 'green':
        greenValue + change > 255 || greenValue + change < 0 ? null : setGreenValue(greenValue + change);
        return;
      default:
        return;
    }

  };



  return <ScrollView>
    <View style={styles.pageStyle}>
      <Text style={styles.titleStyle}>Color Pickler</Text>
      <ColorCounter2
        color="RED"
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', COLOR_INCREMENT * -1)}
        value={redValue}
      />
      <ColorCounter2
        color="GREEN"
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', COLOR_INCREMENT * -1)}
        value={greenValue}
      />
      <ColorCounter2
        color="BLUE"
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', COLOR_INCREMENT * -1)}
        value={blueValue}
      />
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={255}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={value => setRedValue(Math.floor(value))}
      />
      <Text>Slider Value: {sliderValue}</Text>
      <View
        style={{
          backgroundColor: `rgb(${redValue},${greenValue},${blueValue})`,
          height: 200,
          width: 200,
        }}><Text style={styles.colorContainer}>RGB({redValue},{greenValue},{blueValue})</Text></View>
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
    alignContent: 'center'
  },
  colorContainer: {
    alignItems: "center",
    justifyContent: 'center',
    padding: 10,
    height: '100%',
    width: '100%',
    fontSize: 20,
    color: '#fff'

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

export default ColorPickerScreen;