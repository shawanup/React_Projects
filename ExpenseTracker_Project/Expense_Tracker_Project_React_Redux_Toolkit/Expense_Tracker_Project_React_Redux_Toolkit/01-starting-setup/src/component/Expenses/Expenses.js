import { useHistory } from "react-router-dom";
import Button from "../UI/Button";
import ExpenseItem from "./ExpenseItem";
import classes from "./Expenses.module.css";
import { useDispatch, useSelector } from "react-redux";
import { themeAction } from "../../store/theme";
import Toggle from "react-styled-toggle";
import { useEffect } from "react";
import DownloadFile from "../UI/DownloadFileButton";
const Expenses = (props) => {
  const expense = useSelector((state) => state.expense.expenses);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const storedTheme = localStorage.getItem("toggle");

  //   if (theme !== storedTheme) {
  //     dispatch(themeAction.toggle());
  //   }
  // }, []);
  const exepenseTotalAmount = useSelector(
    (state) => state.expense.totalExpenseAmount
  );

  const history = useHistory();
  const clickHandler = () => {
    history.replace("/welcome");
  };

  const clickPremiumButtonHandler = () => {};

  const toggleHandler = () => {
    dispatch(themeAction.toggle());
  };
  return (
    <div
      className={classes.expensesContainer}
      id={theme === "light" ? classes.light : classes.dark}
    >
      <header className={classes.expenseHeader}>
        <div className={classes.headerbtn}>
          <Button className={classes.expenseHomebtn} onClick={clickHandler}>
            Home
          </Button>
          <Button
            className={classes.expenseHomebtn}
            disabled={exepenseTotalAmount <= 10000 ? "disabled" : ""}
            onClick={clickPremiumButtonHandler}
          >
            Activate Premium
          </Button>
          <DownloadFile
            className={classes.expenseHomebtn}
            disabled={exepenseTotalAmount <= 1000 ? "disabled" : ""}
          >
            Download(Expense Amount greater than 1000)
          </DownloadFile>
        </div>
        <div className={classes.toggleBtn}>
          <Toggle onChange={toggleHandler} />
        </div>
      </header>
      <h1>Expenses</h1>
      <div className={classes.expenses}>
        <div className={classes.expenseItemContainer}>
          {expense.map((item) => {
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
        <h3>Total Amount: ${exepenseTotalAmount}</h3>
      </div>
    </div>
  );
};

export default Expenses;
