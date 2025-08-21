import { ExpensesContext } from "../../../store/context/expense-context";
import ExpensesOutput from "../expensiveAppComponents/ExpensesOutput";
import { getDateMinusDays } from "../../../utils/Date";
import { useContext } from "react";

export default function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expenses) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expenses.date > date7DaysAgo;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      periodName="last 7 Days"
      fallBackText={"No expenses Registered"}
    />
  );
}
