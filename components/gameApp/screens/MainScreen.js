import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GameScreen from "./GameScreen";
import GameOverScreen from "./GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Colors from "../../../utils/Colors";

export default function MainScreen() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [roundsNumber, setRoundsNumber] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("../../../assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("../../../assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedUserNumber(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function startNewGameHandler() {
    setRoundsNumber(0);
    setUserNumber(null);
    setGameOver(false);
  }

  let screen = <StartGameScreen onPickedNumber={pickedUserNumber} />;

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        setGameOver={setGameOver}
        setRoundsNumber={setRoundsNumber}
      />
    );
  }
  if (gameOver) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={roundsNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }
  return (
    <>
      <StatusBar style={"light"} />
      <LinearGradient
        colors={[Colors.Borders, Colors.Secondary, Colors.Primary]}
        style={styles.appContainer}
      >
        <ImageBackground
          source={require("../../../assets/backgroundImage.jpg")}
          resizeMode="cover"
          style={styles.appContainer}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.appContainer}> {screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
