import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../expensiveAppComponents/IconButton";
import { ExpenseColors } from "../../../utils/Colors";

export default function ManageExpenses({ route, navigation }) {
  const edetedExpenseId = route.params?.expenseId;
  const isEdeting = !!edetedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdeting ? "Edit Expense" : "Add expense",
    });
  }, [navigation, isEdeting]);

  function deleteExpenseHandler() {}
  return (
    <View style={styles.container}>
      {isEdeting && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={ExpenseColors.error500}
            size={34}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: ExpenseColors.primary700,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: ExpenseColors.primary500,
    alignItems: "center",
  },
});
