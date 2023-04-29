import { createSlice } from "@reduxjs/toolkit";

const initialState = { expenses: [],totalExpenseAmount:0};

const expenseSlice = createSlice({
  name: "Expense",
  initialState: initialState,
  reducers: {
    addExpense(state, action) {
      state.expenses = [action.payload, ...state.expenses];
      state.totalExpenseAmount=state.expenses.reduce((total,expense)=>{
        return total+(+expense.amount);
      },0)
    },
    deleteExpense(state, action) {
        const deleteExpenseIndex=state.expenses.findIndex((item)=>{
            return item.id===action.payload;
        })

        const updatedTotalAmount=state.totalExpenseAmount-state.expenses[deleteExpenseIndex].amount;
      const remainingExpenses = state.expenses.filter((item) => {
        return item.id !== action.payload;
      });

      state.expenses = remainingExpenses;
      state.totalExpenseAmount=updatedTotalAmount;
    },
  },
});

export const expenseAction = expenseSlice.actions;



export default expenseSlice.reducer;
