import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
	const friends = [
		{ name: 'Bubba', likes: 'Bonsai Trees' },
		{ name: 'Samantha', likes: 'Guns and Ninja Movies'  },
		{ name: 'Fred', likes: 'Napping!' },

	];

	return (
		<View>
			<Text>test list:</Text>
			<FlatList
		//	horizontal
				showsVerticalScrollIndicator={false}
				keyExtractor={friend => friend.name}
				data={friends}
				renderItem={({ item }) => {
					return (
					<Text style={styles.textStyle}>{item.name} likes {item.likes}!</Text>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 110 
	}

});

export default ListScreen;