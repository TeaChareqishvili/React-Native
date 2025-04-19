import { View, Text, StyleSheet } from "react-native";

export default function SubTitle({ children }) {
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.details}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    textAlign: "center",
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "#9b2226",
  },

  detailContainer: {
    borderBottomColor: "#9b2226",
    borderBottomWidth: 2,
    marginVertical: 10,
  },
});
