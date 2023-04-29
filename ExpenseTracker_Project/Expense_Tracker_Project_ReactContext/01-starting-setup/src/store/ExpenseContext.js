import React from "react";

const ExpenseContext = React.createContext({
  expenses: [],
  addExpenses: () => {},
  deleteExpenses:()=>{}  
});

export default ExpenseContext;
