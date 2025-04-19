import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../gameComponents/PrimaryButton";
import { useState } from "react";
import Colors from "../../../utils/Colors";
import Title from "../gameComponents/Title";
import Card from "../gameComponents/Card";
import IntsractionText from "../gameComponents/InstructionText";

export default function StartGameScreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function inputNumberHandler(enteredNum) {
    setEnteredNumber(enteredNum);
  }

  function resetNumberHandler() {
    setEnteredNumber("");
  }

  function confirmNumberHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99 ",
        [{ text: "Ok", style: "destructive", onPress: resetNumberHandler }]
      );
      return;
    }
    onPickedNumber(chosenNumber);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <IntsractionText style={styles.text}>Enter a number</IntsractionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={inputNumberHandler}
        />
        <View style={styles.buttonWrapper}>
          <View style={{ flex: 1, margin: 5 }}>
            <PrimaryButton onPress={resetNumberHandler}>Reset</PrimaryButton>
          </View>
          <View style={{ flex: 1, margin: 5 }}>
            <PrimaryButton onPress={confirmNumberHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 25,
  },

  numberInput: {
    height: 50,
    width: 80,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: Colors.Borders,
    borderBottomWidth: 2,
    color: Colors.Borders,
    marginVertical: 10,
    fontWeight: "bold",
  },
  buttonWrapper: {
    flexDirection: "row",
    marginVertical: 24,
  },
});
