import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

export default function CategoryGrid({ title, color, onPress }) {
  return (
    <View style={styles.mealGridContainer}>
      <Pressable
        android_ripple={{ color: "adb5bd" }}
        style={({ pressed }) => [
          styles.pressable,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.mealInnerConatiner, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
  },
  mealGridContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "white",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.75,
    shadowRadius: 4,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  mealInnerConatiner: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "#ffffff",
  },
  buttonPressed: {
    opacity: 0.25,
  },
});
