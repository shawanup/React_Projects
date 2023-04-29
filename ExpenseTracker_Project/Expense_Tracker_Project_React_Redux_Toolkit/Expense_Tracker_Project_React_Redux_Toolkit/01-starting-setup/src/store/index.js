import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import expenseReducer from "./Expense";
import themeReducer from "./theme";
import  showNotificationReducer  from "./forgotPasswordNotification";

const store = configureStore({
  reducer: {
    auth: authReducer,
    expense: expenseReducer,
    theme: themeReducer,
    showNotification: showNotificationReducer,
  },
});

export default store;
