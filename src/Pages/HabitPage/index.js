import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function HabitPage() {
	return (
		<View style={styles.container}>
			<Text>HabitPage</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#151515",
		width: 350,
		borderRadius: 25,
		padding: 30,
	}
});
