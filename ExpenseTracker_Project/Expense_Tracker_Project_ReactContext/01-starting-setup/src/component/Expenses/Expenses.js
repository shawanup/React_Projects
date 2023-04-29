import { useContext } from "react";
import { useHistory } from "react-router-dom";
import ExpenseContext from "../../store/ExpenseContext";
import Button from "../UI/Button";
import ExpenseItem from "./ExpenseItem";
import classes from "./Expenses.module.css";
const Expenses = (props) => {
  const history = useHistory();
  const expCtx = useContext(ExpenseContext);
  const clickHandler = () => {
    history.replace("/welcome");
  };
  console.log("expCtx", expCtx);
  return (
    <div className={classes.expensesContainer}>
      <header className={classes.expenseHeader}>
        <nav>
          <Button className={classes.expenseHomebtn} onClick={clickHandler}>
            Home
          </Button>
        </nav>
      </header>
      <h1>Expenses</h1>
      <div className={classes.expenses}>
        <div className={classes.expenseItemContainer}>
          {expCtx.expenses.map((item) => {
            return (
              <ExpenseItem
                key={item.id}
                id={item.id}
                text={item.title}
                amount={item.amount}
                category={item.category}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
