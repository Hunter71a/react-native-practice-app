import React, { useReducer } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Slider, ScrollView } from 'react-native';
import ColorCounter from '../screens/components/ColorCounter';
import ColorCounter2 from '../screens/components/ColorCounter2';

const COLOR_INCREMENT = 30;

const innitialState = {
  red: 0,
  green: 0,
  blue: 0
};

const reducer = (state, action) => {
  // state = {red: number, green: number, blue: number};
  // action = {colorToChange: 'red || 'green' || 'blue', amount : 15 || -15}

  switch (action.colorToChange) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0 ? state:{ ...state, red: state.red + action.amount }    
    case 'green':
      return state.green + action.amount > 255 || state.green + action.amount < 0 ? state:{ ...state, green: state.green + action.amount }    
     
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state:{ ...state, blue: state.blue + action.amount }  
     
    default:
      return state;
  }
};

const ColorPickerScreenOptomized = () => {
  const [state, dispatch] = useReducer(reducer, innitialState);
  console.log(state);
  const {red, green, blue} = state;

  return <ScrollView>
    <View style={styles.pageStyle}>
      <Text style={styles.titleStyle}>Color Pickler</Text>
      <ColorCounter2
        color="RED"
        onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
        value={state.red}
      />
      <ColorCounter2
        color="GREEN"
        onIncrease={() => dispatch({ colorToChange: 'green', amount:  COLOR_INCREMENT }) }
        onDecrease={() =>  dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
        value={state.green}
      />
      <ColorCounter2
        color="BLUE"
        onIncrease={() =>  dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
        onDecrease={() =>  dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
        value={state.blue}
      />
      {/* <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={255}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={value => setRedValue(Math.floor(value))}
      />
      <Text>Slider Value: {sliderValue}</Text> */}
      <View
        style={{
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
          height: 200,
          width: 200,
        }}><Text style={styles.colorContainer}>RGB({state.red},{state.green},{state.blue})</Text></View>
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

export default ColorPickerScreenOptomized;