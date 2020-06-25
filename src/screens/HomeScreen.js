import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>

      <Text style={styles.text}>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Chump')}
        title="Go to the components Screen"
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to the List Demo"
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to the Image Demo"
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to the Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go to the Color Demo"
      />
      <Button
        onPress={() => navigation.navigate('Picker')}
        title="Go to the Color Picker Demo"
      />
      <Button
        onPress={() => navigation.navigate('Slider')}
        title="Go to the Color Picker with Sliders Demo"
      />
      <Button
        onPress={() => navigation.navigate('Optomized')}
        title="Go to the Optomized Color Picker"
      />
      <Button
        onPress={() => navigation.navigate('Text')}
        title="Go to the Text Input Screen"
      />
       <Button
        onPress={() => navigation.navigate('Box')}
        title="Go to the Box Screen"
      />
      <Button
        onPress={() => navigation.navigate('Box2')}
        title="Go to the Flex Positioning Practice Screen"
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>GO to the list demo</Text>

      </TouchableOpacity> */}

    </View>

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
