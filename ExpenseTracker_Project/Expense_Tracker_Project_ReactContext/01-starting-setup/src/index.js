import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import AuthProvider from "./store/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import ExpenseProvider from "./store/ExpenseProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ExpenseProvider>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </ExpenseProvider>
);
