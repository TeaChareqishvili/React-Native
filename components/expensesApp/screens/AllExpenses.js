import { useContext } from "react";
import ExpensesOutput from "../expensiveAppComponents/ExpensesOutput";
import { ExpensesContext } from "../../../store/context/expense-context";

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      periodName="total"
      fallBackText={"No registered expenses found"}
    />
  );
}
