import { View, Text, StyleSheet } from "react-native";

export default function MealDescription({ item }) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{item.duration}m</Text>
      <Text style={styles.detailItem}>{item.complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{item.affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontFamily: "open-sans",
    fontSize: 20,
    color: "#1d3557",
  },
});
