import AuthForm from "./component/Auth/AuthForm";

import { Route, Switch } from "react-router-dom";
import { useContext, useEffect } from "react";
import AuthContext from "./store/AuthContext";
import Welcome from "./page/WelcomePage";
import CompletePage from "./page/CompletePage";
import VerifyUserProfile from "./component/VerifyUserProfile/VerifyUserProfile";
import ForgotPassword from "./component/forgotPassword/ForgotPassword";
import AddExpensePage from "./page/AddExpensePage";
import ExpensePage from "./page/ExpensePage";
import ExpenseContext from "./store/ExpenseContext";

function App() {
  const expCtx = useContext(ExpenseContext);

  let url =
    "https://expensetracker-e406b-default-rtdb.firebaseio.com/expense.json";
  useEffect(() => {
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        if (data.error && data.error.message) {
          throw new Error(data.error.message);
        } else {
          for (let key in data) {
            expCtx.addExpenses({
              id:key,
              title: data[key].title,
              amount: data[key].amount,
              category: data[key].category,
            });
          }
        }
      });
  }, []);

  const authCtx = useContext(AuthContext);
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <AuthForm />
        </Route>
        <Route exact path="/welcome">
          {authCtx.isLoggedIn && <Welcome />}
        </Route>
        <Route path="/welcome/complete" exact>
          <CompletePage />
        </Route>
        <Route path="/verifyUserProfile">
          <VerifyUserProfile />
        </Route>
        <Route path="/forgotPassword">
          <ForgotPassword />
        </Route>
        <Route path="/welcome/AddExpense" exact>
          <AddExpensePage />
        </Route>
        <Route path="/welcome/Expense">
          <ExpensePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
