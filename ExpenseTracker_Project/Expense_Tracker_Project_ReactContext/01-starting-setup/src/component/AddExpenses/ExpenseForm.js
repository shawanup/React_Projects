import classes from "./ExpenseForm.module.css";
import { TiTick } from "react-icons/ti";
import { GrMoney } from "react-icons/gr";
import { useContext, useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import ExpenseContext from "../../store/ExpenseContext";

const ExpenseForm = (props) => {
  const InputExpenseTitleRef = useRef();
  const InputAmountRef = useRef();
  const InputCategoryRef = useRef();
  let url =
    "https://expensetracker-e406b-default-rtdb.firebaseio.com/expense.json";
  const history = useHistory();
  const expCtx = useContext(ExpenseContext);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramId = queryParams.get("id");
  console.log("paramId", paramId);
  ////////////////////////////

  useEffect(() => {
    if (paramId && expCtx.expenses.length > 0) {
      const editItem = expCtx.expenses.filter((item) => {
        return item.id === paramId;
      });
      console.log("expCtx", expCtx.expenses);
      console.log("queryParams", queryParams);
      url = `https://expensetracker-e406b-default-rtdb.firebaseio.com/expense/${paramId}.json`;
      InputExpenseTitleRef.current.value = editItem[0].title;
      InputAmountRef.current.value = editItem[0].amount;
      InputCategoryRef.current.value = editItem[0].category;
    }
  }, [paramId]);

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredExpenseTitle = InputExpenseTitleRef.current.value;
    const enteredAmount = InputAmountRef.current.value;
    const selectedCategory = InputCategoryRef.current.value;

    let resp;
    try {
      if (paramId) {
        resp = await fetch(url, {
          method: "PATCH",
          body: JSON.stringify({
            title: enteredExpenseTitle,
            amount: enteredAmount,
            category: selectedCategory,
          }),
        });
      } else {
        resp = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            title: enteredExpenseTitle,
            amount: enteredAmount,
            category: selectedCategory,
          }),
        });
      }

      const data = await resp.json();

      console.log("data", data);

      if (!resp.ok) {
        let errorMessage = data.error.message;
        throw new Error(errorMessage);
      } else {
        history.push("/welcome/Expense");
        console.log("expenseformdata", data);
      }

      if (paramId) {
        console.log("deleteExpenses", data.name);
        expCtx.deleteExpenses(paramId);
      }

      expCtx.addExpenses({
        id: data.name,
        title: enteredExpenseTitle,
        amount: enteredAmount,
        category: selectedCategory,
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className={classes.expenseFormContainer}>
      <form className={classes.expenseForm} onSubmit={submitHandler}>
        <div className={classes.expenseHeader}>
          <GrMoney />
          <h1>Expense(Debit)</h1>
        </div>
        <div className={classes.textNumber}>
          <input
            type="text"
            defaultValue="Enter Text"
            ref={InputExpenseTitleRef}
          ></input>
          <div className={classes.amountButton}>
            <input
              type="number"
              defaultValue="Amount"
              ref={InputAmountRef}
            ></input>
            <button className={classes.expenseAddButton}>
              <TiTick />
            </button>
          </div>
        </div>
        <div className={classes.category}>
          <label for="category">Category:</label>
          <select name="category" id="category" ref={InputCategoryRef}>
            <option value="food">Food</option>
            <option value="petrol">Petrol</option>
            <option value="salary">Salary</option>
            <option value="personal">Personal</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
