import "./ExpenseItem.css";
import React,{useState} from "react";
import ExpenseItemDate from "./ExpenseItemDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  const [title,setTitle]=useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item ">
      <ExpenseItemDate date={props.date} />

      <div className="expense-item__description">
        <h2 className="">{title}</h2>
        <div className="expense-item__price ">{props.price} TL</div>
        <button onClick={clickHandler}>Change Title </button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
