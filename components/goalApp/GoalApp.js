import { useState } from "react";
import { Button, StyleSheet, View, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./GoalItem";
import GoalInput from "./GoalInput";

export default function GoalApp() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  function openModalHandler() {
    setOpenModal(true);
  }

  function closeModalhandler() {
    setOpenModal(false);
  }

  function addGoalHandler(goalText) {
    const trimmedGoalText = goalText.trim();
    if (trimmedGoalText === "") {
      Alert.alert("Empty Input", "Please enter a goal before submitting.", [
        { text: "OK", onPress: () => console.log("Alert closed") },
      ]);
    } else {
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        { text: trimmedGoalText, key: Math.random().toString() },
      ]);
      closeModalhandler();
    }
  }

  function deleteGoalHandler(key) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== key);
    });
  }
  return (
    <>
      <StatusBar style={openModal ? "dark" : "light"} />
      <View style={styles.appContainer}>
        <View style={styles.addGoalButton}>
          <Button
            title="Add a New Goal"
            color="#ffffff"
            onPress={openModalHandler}
          />
        </View>

        <GoalInput
          visible={openModal}
          addGoalHandler={addGoalHandler}
          closeModalhandler={closeModalhandler}
        />
        <GoalItem
          courseGoals={courseGoals}
          deleteGoalHandler={deleteGoalHandler}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#003049",
  },

  addGoalButton: {
    marginTop: 20,
    backgroundColor: "#00b4d8",
    borderRadius: 7,
    padding: 6,
  },
});
