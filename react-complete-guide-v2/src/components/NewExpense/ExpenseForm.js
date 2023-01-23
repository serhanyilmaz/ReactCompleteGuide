import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // ESKİ YÖNTEM
  const [entiredTitle, setEntiredTitle] = useState("");
  const [entiredAmount, setEntiredAmount] = useState("");
  const [entiredDate, setEntiredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     entiredTitle: "",
  //     entiredAmount: "",
  //     entiredDate: "",
  //   });

  const titleChangeEventHandler = (event) => {
    // ESKİ
    setEntiredTitle(event.target.value);

    // ALTERNATİF
    // setUserInput((prevState) => {
    //     return { ...prevState, entiredTitle: event.target.value };
    //   });

    //YENİ
    // setUserInput({
    //   ...userInput,
    //   entiredTitle: event.target.value,
    // });
  };

  const amountChangeEventHandler = (event) => {
    // ESKİ
    setEntiredAmount(event.target.value);

    // ALTERNATİF
    // setUserInput((prevState) => {
    //  return { ...prevState, entiredAmount: event.target.value };
    // });

    // YENİ
    // setUserInput({
    //   ...userInput,
    //   entiredAmount: event.target.value,
    // });
  };

  const dateChangeEventHandler = (event) => {
    // ESKİ
    setEntiredDate(event.target.value);
    //console.log("Tarih",event.target.value);
    // ALTERNATİF
    // setUserInput((prevState) => {
    //     return { ...prevState, entiredDate: event.target.value };
    //   });

    // YENİ
    // setUserInput({
    //   ...userInput,
    //   entiredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: entiredTitle,
      price: entiredAmount,
      date: new Date(entiredDate),
    };

    props.onExpenseSaveData(expenseData);

    setEntiredTitle("");
    setEntiredAmount("");
    setEntiredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={entiredTitle}
            onChange={titleChangeEventHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={entiredAmount}
            onChange={amountChangeEventHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="01.01.2022"
            max="31.12.2022"
            value={entiredDate}
            onChange={dateChangeEventHandler}
          ></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="cancel" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
