// import AuthForm from "./component/Auth/AuthForm";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import Welcome from "./page/WelcomePage";
import CompletePage from "./page/CompletePage";
import VerifyUserProfile from "./component/VerifyUserProfile/VerifyUserProfile";
import ForgotPassword from "./component/forgotPassword/ForgotPassword";
import AddExpensePage from "./page/AddExpensePage";
import ExpensePage from "./page/ExpensePage";
import { expenseAction } from "./store/Expense";
import AuthPage from "./page/AuthPage";


function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  let url =
    "https://expensetracker-c07a2-default-rtdb.firebaseio.com/expense.json";
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
            dispatch(
              expenseAction.addExpense({
                id: key,
                title: data[key].title,
                amount: data[key].amount,
                category: data[key].category,
              })
            );
          }
        }
      });
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <AuthPage />
        </Route>
        <Route path="/welcome">
          {/* {isAuth && <Welcome />} */}
          <Welcome />
        </Route>
        <Route path="/complete" exact>
          <CompletePage />
        </Route>
        <Route path="/verifyUserProfile">
          <VerifyUserProfile />
        </Route>
        <Route path="/forgotPassword">
          <ForgotPassword />
        </Route>
        <Route path="/AddExpense" exact>
          <AddExpensePage />
        </Route>
        <Route path="/Expense">
          <ExpensePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
