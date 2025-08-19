import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpenses from "./ManageExpenses";
import RecentExpenses from "./RecentExpenses";
import AllExpenses from "./AllExpenses";

const Stack = createNativeStackNavigator();
const Bottomtabs = createBottomTabNavigator();

// nesetd navigation

function ExpensesBottomOverview() {
  return (
    <Bottomtabs.Navigator>
      <Bottomtabs.Screen name="RecentExpenses" component={RecentExpenses} />
      <Bottomtabs.Screen name="AllExpenses" component={AllExpenses} />
    </Bottomtabs.Navigator>
  );
}

export default function MainScreen() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesBottomOverview}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
