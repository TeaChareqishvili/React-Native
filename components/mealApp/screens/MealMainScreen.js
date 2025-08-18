import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverViewScreen from "./MealOverViewScreen";
import MealDetailsScreen from "./MealDetailsScreen";
import CategoryScreen from "./CategoryScreen";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import { createDrawerNavigator } from "@react-navigation/drawer";

import FavoriteFood from "./FavoriteFood";
import { store } from "../../../store/redux/store";
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

export default function MealMainScreen() {
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
