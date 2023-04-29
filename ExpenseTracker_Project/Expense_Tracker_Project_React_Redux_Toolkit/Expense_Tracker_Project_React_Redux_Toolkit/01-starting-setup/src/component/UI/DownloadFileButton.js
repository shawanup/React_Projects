import Button from "./Button";
import { useSelector } from "react-redux";
import { CSVLink } from "react-csv";

const DownloadFile = (props) => {
  const downloadExpense = useSelector((state) => state.expense.expenses);

  const downloadHandler = () => {
  };
  const headers = [
    { label: "Title", key: "title" },
    { label: "Amount", key: "amount" },
    { label: "Category", key: "category" },
  ];

  return (
    <div>
      <CSVLink data={downloadExpense} headers={headers}>
        <Button
          className={props.className}
          onClick={downloadHandler}
          disabled={props.disabled}
        >
          {props.children}
        </Button>
      </CSVLink>
    </div>
  );
};

export default DownloadFile;
