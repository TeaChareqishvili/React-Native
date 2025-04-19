import "./gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverViewScreen from "./components/mealApp/screens/MealOverViewScreen";
import MealDetailsScreen from "./components/mealApp/screens/MealDetailsScreen";
import CategoryScreen from "./components/mealApp/screens/CategoryScreen";

// import WelcomeScreen from "./screens/WelcomeScreen";
// import UserScreen from "./screens/UserScreen";
// import { createDrawerNavigator } from "@react-navigation/drawer";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

// const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="user">
        <Drawer.Screen name="welcome" component={WelcomeScreen} />
        <Drawer.Screen name="user" component={UserScreen} />
      </Drawer.Navigator> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Meal-Categories"
          component={CategoryScreen}
          options={{
            title: "All Categories",
          }}
        />
        <Stack.Screen
          name="Meal-OverView"
          component={MealOverViewScreen}
          options={{
            title: "Meal Overview",
          }}
        />
        <Stack.Screen
          name="Meal-Detail"
          component={MealDetailsScreen}
          options={{
            title: "Meal Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
