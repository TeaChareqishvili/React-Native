import { View, StyleSheet, Image, Text } from "react-native";
import Title from "../gameComponents/Title";
import Colors from "../../../utils/Colors";
import PrimaryButton from "../gameComponents/PrimaryButton";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  return (
    <View style={styles.gameOverContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/success.png")}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed
          <Text style={styles.highlightText}> {roundsNumber} </Text> rounds to
          guess <Text style={styles.highlightText}> {userNumber} </Text> number
        </Text>
        <PrimaryButton onPress={onStartNewGame}>New Game</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameOverContainer: {
    alignItems: "center",
    marginTop: 24,
    padding: 24,
    flex: 1,
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: "50%",
    borderColor: Colors.Secondary,
    borderWidth: 2,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },

  summaryText: {
    fontFamily: "open-sans",
    fontSize: 20,
    color: Colors.Text,
    textAlign: "center",
    marginVertical: 24,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.Secondary,
    fontSize: 24,
  },
});
