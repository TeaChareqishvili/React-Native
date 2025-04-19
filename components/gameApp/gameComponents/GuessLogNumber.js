import { View, StyleSheet, Text } from "react-native";
import Colors from "../../../utils/Colors";

export default function GuessLogNumber({ roundNumber, guess }) {
  return (
    <View style={styles.logs}>
      <Text style={styles.logText}>#{roundNumber}</Text>
      <Text style={styles.logText}>Opponent's guess {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logs: {
    marginTop: 10,
    border: Colors.Borders,
    borderWidth: 2,
    borderRadius: 40,
    padding: 15,
    backgroundColor: Colors.Primary,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    shadowColor: Colors.Borders,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
  },
  logText: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: Colors.Text,
  },
});
