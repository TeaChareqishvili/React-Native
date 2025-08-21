import { createContext, useReducer } from "react";
import { DUMMT_DATA } from "../../data/expensesData";

export const ExpensesContext = createContext({
  expenses: [],
  updateExpenses: (id, { description, amount, date }) => {},
  deleteExpenses: (id) => {},
  addExpenses: ({ description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatableItem = { ...updatableExpense, ...action.payload.data };
      const updatableExpenses = [...state];
      updatableExpenses[updatableExpenseIndex] = updatableItem;
      return updatableExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

export default function ExpenseContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMT_DATA);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(expenseData, id) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }
  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
}
