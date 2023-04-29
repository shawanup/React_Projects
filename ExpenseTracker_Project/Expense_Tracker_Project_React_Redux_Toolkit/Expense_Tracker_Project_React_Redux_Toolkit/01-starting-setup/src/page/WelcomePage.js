import { Link, NavLink, useHistory } from "react-router-dom";
import Button from "../component/UI/Button";
import classes from "./WelcomePage.module.css";
import { authAction } from "../store/auth";
import { useDispatch, useSelector } from "react-redux";
import ExpensePic from "../assests/Expense.jpg";
import { useEffect } from "react";

const Welcome = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authAction.logout());
    history.replace("/");
  };
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (!isAuth) {
      history.replace("/");
    }
  }, []);

  return (
    <>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <h1>WELCOME!!!</h1>
          <ul className={classes.expenseList}>
            <li>
              <NavLink to="/Expense" activeClassName={classes.expense}>
                Expense
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AddExpense"
                activeClassName={classes.addExpense}
              >
                Add Expense
              </NavLink>
            </li>
          </ul>
          <p>
            Your Profile is incomplete?&nbsp;
            <Link to="/complete">Complete now</Link>
          </p>
          <Button className={classes.logoutButton} onClick={logoutHandler}>
            LogOut
          </Button>
        </nav>
      </header>
      <img
        src={ExpensePic}
        alt="expense welcome page"
        className={classes.welcomePic}
      ></img>
    </>
  );
};

export default Welcome;
