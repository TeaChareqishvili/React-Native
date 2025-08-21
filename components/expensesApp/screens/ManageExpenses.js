import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../expensiveAppComponents/IconButton";
import { ExpenseColors } from "../../../utils/Colors";
import Button from "../expensiveAppComponents/Button";
import { ExpensesContext } from "../../../store/context/expense-context";

export default function ManageExpenses({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);
  const edetedExpenseId = route.params?.expenseId;
  const isEdeting = !!edetedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdeting ? "Edit Expense" : "Add expense",
    });
  }, [navigation, isEdeting]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(edetedExpenseId);
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler() {
    if (isEdeting) {
      expensesCtx.updateExpense(edetedExpenseId, {
        description: "test!!!!",
        amount: 59.99,
        date: new Date("2025-08-20"),
      });
    } else {
      expensesCtx.addExpense({
        description: "test",
        amount: 19.99,
        date: new Date("2025-08-21"),
      });
    }
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEdeting ? "Update" : "Add"}
        </Button>
      </View>
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

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: ExpenseColors.primary500,
    alignItems: "center",
  },
});
