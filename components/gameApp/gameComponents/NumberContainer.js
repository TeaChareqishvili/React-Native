import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../utils/Colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textNumber}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 24,
  },
  textNumber: {
    fontSize: 34,
    color: Colors.Text,
    borderWidth: 2,
    paddingHorizontal: 34,
    paddingVertical: 25,
    borderRadius: "50%",
    borderColor: Colors.Text,
    fontFamily: "open-sans-bold",
  },
});
