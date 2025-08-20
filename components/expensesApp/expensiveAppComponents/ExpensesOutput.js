import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { DUMMT_DATA } from "../../../data/expensesData";
import { ExpenseColors } from "../../../utils/Colors";

export default function ExpensesOutput({ expenses, periodName }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={periodName} expenses={DUMMT_DATA} />
      <ExpensesList expenses={DUMMT_DATA} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    flex: 1,
    backgroundColor: ExpenseColors.primary700,
  },
});
