import { Link,NavLink } from "react-router-dom";
import classes from "./WelcomePage.module.css";

const Welcome = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <h1>WELCOME!!!</h1>
        <ul className={classes.expenseList}>
            <li><NavLink to='/welcome/Expense' activeClassName={classes.expense}>Expense</NavLink></li>
            <li><NavLink to='/welcome/AddExpense' activeClassName={classes.addExpense}>Add Expense</NavLink></li>
        </ul>

        <p>
          Your Profile is incomplete?&nbsp;
          <Link to="/welcome/complete" className={classes.link}>
            Complete now
          </Link>
        </p>
      </nav>
    </header>
  );
};

export default Welcome;
