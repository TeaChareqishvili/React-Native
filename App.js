import "./gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverViewScreen from "./components/mealApp/screens/MealOverViewScreen";
import MealDetailsScreen from "./components/mealApp/screens/MealDetailsScreen";
import CategoryScreen from "./components/mealApp/screens/CategoryScreen";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import FavoriteFood from "./components/mealApp/screens/FavoriteFood";
import { store } from "./store/redux/store";
// import FavoriteContextProvider from "./store/context/favorite-context";

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="All Category"
        component={CategoryScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="list" />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteFood}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="star" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <Provider store={store}>
        {/* <FavoriteContextProvider> */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Meal-Categories"
              component={DrawerNavigation}
              options={{
                headerShown: false,
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
      </Provider>
      {/* </FavoriteContextProvider> */}
    </>
  );
}
