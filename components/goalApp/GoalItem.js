import { StyleSheet, View, FlatList, Text, Pressable } from "react-native";

export default function GoalItem({ courseGoals, deleteGoalHandler }) {
  return (
    <View style={styles.goalContainer}>
      {courseGoals.length > 0 ? (
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.listGoals}>
                <Pressable
                  style={({ pressed }) => pressed && styles.pressedEffect}
                  onPress={deleteGoalHandler.bind(this, itemData.item.key)}
                >
                  <Text style={styles.listGoalsText}>{itemData.item.text}</Text>
                </Pressable>
              </View>
            );
          }}
        />
      ) : (
        <View style={{ alignItems: "center", marginTop: 15 }}>
          <Text style={styles.textStyle}>Goal List is empty</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    flex: 5,
    marginTop: 25,
  },
  listGoals: {
    borderRadius: 7,
    backgroundColor: "#ffffff",
    marginBottom: 8,
  },
  listGoalsText: {
    color: "green",
    textTransform: "uppercase",
    padding: 20,
  },
  textStyle: {
    color: "#90e0ef",
    textTransform: "uppercase",
    letterSpacing: 1.8,
    fontSize: 24,
    padding: 20,
  },
  pressedEffect: {
    opacity: 0.5,
    backgroundColor: "#dddcb4",
  },
});
