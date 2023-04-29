import { useReducer } from "react";
import ExpenseContext from "./ExpenseContext";

const reducerFunction = (state, action) => {
  if (action.type === "add") {
    return {
      expenses: [action.value, ...state.expenses],
    };
  } else if (action.type === "delete") {
    const remainingExpenses = state.expenses.filter((item) => {
      return item.id!==action.value;
    });
    console.log("remainingExpenses", remainingExpenses);
    return {
      expenses: remainingExpenses,
    };
  }
};

const ExpenseProvider = (props) => {
  const defaultState = {
    expenses: [],
  };

  const [expenseState, dispatch] = useReducer(reducerFunction, defaultState);

  console.log("expenseProviderdata1", expenseState.expenses);

  const addExpenseHandler = (item) => {
    dispatch({ type: "add", value: item });
  };

  const deleteExpenseHandler = (id) => {
    dispatch({ type: "delete", value: id });
  };

  const expenseContext = {
    expenses: expenseState.expenses,
    addExpenses: addExpenseHandler,
    deleteExpenses: deleteExpenseHandler,
  };

  return (
    <ExpenseContext.Provider value={expenseContext}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
