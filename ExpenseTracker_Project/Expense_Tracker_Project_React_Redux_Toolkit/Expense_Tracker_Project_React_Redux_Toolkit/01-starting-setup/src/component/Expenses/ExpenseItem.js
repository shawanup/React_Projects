import Button from "../UI/Button";
import classes from "./ExpenseItem.module.css";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { expenseAction } from "../../store/Expense";

const ExpenseItem = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const editHandler = async () => {
    history.push(`/AddExpense?id=${props.id}`);
  };

  const deleteHandler = async () => {
    try {
      const resp = await fetch(
        `https://expensetracker-c07a2-default-rtdb.firebaseio.com/expense/${props.id}.json`,
        {
          method: "DELETE",
        }
      );

      const data = await resp.json();
      if (!data) {
        alert("expense is deleted successfully");
        dispatch(expenseAction.deleteExpense(props.id));
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
