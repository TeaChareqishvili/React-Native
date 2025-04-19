import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

import { useState } from "react";
export default function GoalInput({
  addGoalHandler,
  visible,
  closeModalhandler,
}) {
  const [goalText, setGoalText] = useState("");

  function goalInputHandler(enterText) {
    setGoalText(enterText);
  }
  function addGoalTextHandler() {
    addGoalHandler(goalText);
    setGoalText(" ");
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../../assets/goal.png")}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Your Course Goal"
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <Button
              color="#edf2f4"
              title="Add Goal"
              onPress={addGoalTextHandler}
            />
          </View>
          <View style={styles.buttons}>
            <Button
              color="#edf2f4"
              title="Cancel"
              onPress={closeModalhandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e3d5ca",
    padding: 16,
    flex: 1,
  },
  inputText: {
    borderColor: "#ef233c",
    borderWidth: 1,
    padding: 15,
    borderRadius: 7,
    width: "100%",
    marginRight: 8,
    color: "#d90429",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 18,
    justifyContent: "space-around",
  },
  buttons: {
    width: "30%",
    backgroundColor: "#ef233c",
    marginHorizontal: 10,
    borderRadius: 6,
  },
  imageStyle: {
    width: 80,
    height: 80,
    margin: 20,
  },
});
