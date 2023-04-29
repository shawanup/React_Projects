import Button from "../UI/Button";
import classes from "./ExpenseItem.module.css";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { useContext } from "react";
import ExpenseContext from "../../store/ExpenseContext";
import { useHistory } from "react-router-dom";

const ExpenseItem = (props) => {
  const expCtx = useContext(ExpenseContext);
  const history = useHistory();

  const editHandler = async () => {
    history.replace(`/welcome/AddExpense?id=${props.id}`);
  };

  const deleteHandler = async () => {
    try {
      const resp = await fetch(
        `https://expensetracker-e406b-default-rtdb.firebaseio.com/expense/${props.id}.json`,
        {
          method: "DELETE",
        }
      );

      const data = await resp.json();
      console.log("delete", data);
      if (!data) {
        alert("expense is deleted successfully");
        expCtx.deleteExpenses(props.id);
      } else if (data.error && data.error.message) {
        throw new Error(data.error.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={classes.expenseItem}>
      <p>{props.text}</p>
      <p>${props.amount}</p>
      <p>{props.category}</p>
      <Button onClick={editHandler}>
        <AiFillEdit />
      </Button>
      <Button onClick={deleteHandler}>
        <AiOutlineDelete />
      </Button>
    </div>
  );
};

export default ExpenseItem;
