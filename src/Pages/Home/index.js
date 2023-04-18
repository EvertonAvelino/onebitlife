import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import LifeStatus from "../../Components/Common/LifeStatus";
import StatusBar from "../../Components/Home/StatusBar";


export default function Home() {
	const navigation = useNavigation();
	const [mindHabit, setMindHabit] = useState();
	const [moneyHabit, setMoneyHabit] = useState();
	const [bodyHabit, setBodyHabit] = useState();
	const [funHabit, setFunHabit] = useState();

	const [robotDaysLife, setRobotDaysLife] = useState();
	const [checks, setChecks] = useState();
	const [gameOver, setGameOver] = useState(false);
	const today = new Date();


	function handleNavExplanation() {
		navigation.navigate("AppExplanation");
	}
	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={{ alignItems: "center" }}>
					{!gameOver ? (
						<Text style={styles.dailyChecks}>
							❤️ {robotDaysLife} {robotDaysLife === "01" ? "dia" : "dias"} - ✔️{" "}
							{checks} {checks === 1 ? "Check" : "Checks"}
						</Text>
					) : (
						<Text style={styles.gameOverTitle}>Game Over</Text>
					)}

					<LifeStatus
						mindHabit={mindHabit}
						moneyHabit={moneyHabit}
						bodyHabit={bodyHabit}
						funHabit={funHabit}
					/>
					<StatusBar
						mindHabit={mindHabit?.progressBar}
						moneyHabit={moneyHabit?.progressBar}
						bodyHabit={bodyHabit?.progressBar}
						funHabit={funHabit?.progressBar}
					/>

					{!gameOver ? (
						<View>
							{/* {mindHabit ? (
								<EditHabit habit={mindHabit} checkColor="#90B7F3" />
							) : (
								<CreateHabit habitArea="Mente" borderColor="#90B7F3" />
							)}
							{moneyHabit ? (
								<EditHabit habit={moneyHabit} checkColor="#85BB65" />
							) : (
								<CreateHabit habitArea="Financeiro" borderColor="#85BB65" />
							)}
							{bodyHabit ? (
								<EditHabit habit={bodyHabit} checkColor="#FF0044" />
							) : (
								<CreateHabit habitArea="Corpo" borderColor="#FF0044" />
							)}
							{funHabit ? (
								<EditHabit habit={funHabit} checkColor="#FE7F23" />
							) : (
								<CreateHabit habitArea="Humor" borderColor="#FE7F23" />
							)} */}

							<Text
								style={styles.explanationText}
								onPress={() => {
									handleNavExplanation();
								}}
							>
								Ver explicações novamente
							</Text>
						</View>
					) : (
						<View style={{ marginVertical: 40 }}>
							<DefaultButton
								buttonText={"Resetar o Game"}
								handlePress={handleGameOver}
								width={250}
								height={50}
							/>
						</View>
					)}
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
	dailyChecks: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 18,
		marginTop: 40,
	},
	explanationText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
		paddingTop: 15,
		paddingBottom: 25,
	},
	gameOverTitle: {
		marginVertical: 25,
		fontSize: 20,
		fontWeight: "bold",
		color: "white",
	},
});
