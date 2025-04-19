import { View, StyleSheet, Alert, FlatList, Text } from "react-native";
import Title from "../gameComponents/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../gameComponents/NumberContainer";
import PrimaryButton from "../gameComponents/PrimaryButton";
import Card from "../gameComponents/Card";
import IntsractionText from "../gameComponents/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogNumber from "../gameComponents/GuessLogNumber";

function generateRandomBetween(min, max, exclude) {
  const randomNum = Math.floor(Math.random() * (max - min) + min);
  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
}

let maxNumber = 100;
let minNumber = 1;
export default function GameScreen({
  userNumber,
  setGameOver,
  setRoundsNumber,
}) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      setGameOver(true);
      setRoundsNumber(rounds.length);
    }
  }, [currentGuess, userNumber, setGameOver]);

  useEffect(() => {
    (maxNumber = 100), (minNumber = 1);
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that is wrong", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxNumber = currentGuess;
    } else {
      minNumber = currentGuess;
    }
    const newRandomNum = generateRandomBetween(
      minNumber,
      maxNumber,
      currentGuess
    );
    setCurrentGuess(newRandomNum);
    setRounds((prev) => [newRandomNum, ...prev]);
  }
  const roundsLength = rounds.length;
  return (
    <View style={styles.gameScreenContainer}>
      <Title>Opponent's Guess</Title>
      <Card>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
          <IntsractionText>Higher or Lower?</IntsractionText>
          <View style={styles.buttonContainer}>
            <View style={{ flex: 1, margin: 5 }}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                <Ionicons name="add" size={24} color="white" />
              </PrimaryButton>
            </View>
            <View style={{ flex: 1, margin: 5 }}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                <Ionicons name="remove" size={24} color="white" />
              </PrimaryButton>
            </View>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={rounds}
          renderItem={(itemdata) => (
            <GuessLogNumber
              roundNumber={roundsLength - itemdata.index}
              guess={itemdata.item}
            />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    padding: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 24,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
