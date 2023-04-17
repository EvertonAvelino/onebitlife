import React from 'react';
import { Image, ScrollView, View } from 'react-native';

export default function Start() {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View>
				<Image
					source={require("../../assets/icons/logo3.png")}
				/>
				<Text>Vamos Transformar sua vida em jogo, buscando sempre
					o melhor nivel</Text>
			</View>
		</ScrollView>
	);
}
