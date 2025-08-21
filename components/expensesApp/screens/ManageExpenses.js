import { useLayoutEffect } from "react";
import { Text } from "react-native";

export default function ManageExpenses({ route, navigation }) {
  const edetedExpenseId = route.params?.expenseId;
  const isEdeting = !!edetedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdeting ? "Edit Expense" : "Add expense",
    });
  }, [navigation, isEdeting]);

  return <Text>Manage expenses</Text>;
}
