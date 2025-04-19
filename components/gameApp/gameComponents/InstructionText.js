import { Text, StyleSheet } from "react-native";
import Colors from "../../../utils/Colors";

export default function IntsractionText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: Colors.Secondary,
    fontSize: 24,
    fontFamily: "open-sans-bold",
  },
});
