import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const ComponentsScreen = () => {
	const name = 'Chump';
	const greeting = <Text>'Testing, one, two, three. . </Text>;

	return <View styles={styles.wrapper}>
		<Text style={styles.textStyle_header}>Shut up, {name}</Text>
		<Text style={styles.textStyle_subheader}>{greeting}The best of the best!</Text>
	</View>

};

const styles = StyleSheet.create({
	textStyle_header: {
		fontSize: 45,
		color: 'purple',
	},
	textStyle_subheader: {
		fontSize: 20,
		color: 'red'

	},
	wrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		// width: '100%',
		// height: 10
	}

});

export default ComponentsScreen;