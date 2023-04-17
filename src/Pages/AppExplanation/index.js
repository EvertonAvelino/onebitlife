import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import DefaultButton from '../../Components/Common/DefaultButton';




export default function AppExplanation() {
	const navigation = useNavigation();

	function handleSetShowHome() {
		navigation.navigate("Home");
	}
	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={{ alignItems: "center" }}>
					<Text style={styles.title}>
						Antes, deixa {"\n"} eu te explicar...
					</Text>
					<Text style={styles.description}>
						Pronto para subir de nivel na vida?
					</Text>
					<Text style={styles.description}>
						Na proxima tela você vai poder escolher {"\n"} seus 4 habitos
						de forma individual.
					</Text>
					<DefaultButton
						buttonText={"Continuar"}
						handlePress={handleSetShowHome}
						width={250}
						height={50}
					/>
				</View>
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "rgba(21, 21, 21, 0.98)",
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		color: "white",
		textAlign: "center",
		marginVertical: 40,
	},
	descriptionCta: {
		color: "white",
		fontWeight: "bold",
		fontSize: 16,
		marginTop: 20,
		marginBottom: 10,
	},
	description: {
		color: "white",
		textAlign: "center",
		marginBottom: 30,
	},
});
