import "./gesture-handler";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import MainScreen from "./components/expensesApp/screens/MainScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <MainScreen />;
}
