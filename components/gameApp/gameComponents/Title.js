import { Text, StyleSheet } from "react-native";
import Colors from "../../../utils/Colors";

export default function Title({ children }) {
  return <Text style={styles.titleText}>{children}</Text>;
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: Colors.Text,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.Text,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
});
