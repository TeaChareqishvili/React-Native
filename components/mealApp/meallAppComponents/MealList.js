import { Text, View, StyleSheet } from "react-native";

export default function MealList({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listContainer}>
      <Text style={styles.list}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  list: {
    fontFamily: "open-sans",
    fontSize: 18,
    color: "#1b263b",
    textAlign: "center",
  },
  listContainer: {
    backgroundColor: "#839dcb",
    padding: 6,
    borderRadius: 8,
    marginVertical: 10,
  },
});
