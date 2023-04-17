import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { CreateNativeStackNavigator } from '@react-navigation/native-stack'

import Start from '../Pages/Start';

const Stack = CreateNativeStackNavigator();

export default function AllPages() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				ScreeOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name='Start' component={Start} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
