import { View, Text, StyleSheet } from "react-native";
import { ExpenseColors } from "../../../utils/Colors";

export default function ExpensesSummary({ periodName, expenses }) {
  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expenseSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 9,
    backgroundColor: "white",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 14,
    color: ExpenseColors.primary400,
  },
  sum: {
    fontSize: 18,
    fontWeight: "bold",
    color: ExpenseColors.primary500,
  },
});
