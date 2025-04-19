import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../../utils/Colors";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 10,
    marginVertical: 7,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.Secondary,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: Colors.Text,
    textAlign: "center",
    fontSize: 24,
    fontFamily: "open-sans",
  },
  pressed: {
    opacity: 0.75,
  },
});
