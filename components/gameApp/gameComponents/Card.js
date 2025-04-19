import { View, StyleSheet } from "react-native";
import Colors from "../../../utils/Colors";

export default function Card({ children }) {
  return <View style={styles.mainView}>{children}</View>;
}

const styles = StyleSheet.create({
  mainView: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.Primary,
    marginTop: 80,
    shadowColor: Colors.Secondary,
    shadowOffset: { width: 4, height: 5 },
    shadowRadius: 8,
    shadowOpacity: 0.7,
    opacity: 0.7,
  },
});
