import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "1",
      date: new Date(2022, 4, 22),
      title: "Laptop",
      price: 1500,
    },

    {
      id: "2",
      date: new Date(2022, 5, 21),
      title: "Televizyon",
      price: 1100,
    },

    {
      id: "3",
      date: new Date(2022, 6, 20),
      title: "Buzdolabı",
      price: 800,
    },

    {
      id: "4",
      date: new Date(2022, 7, 19),
      title: "Saat",
      price: 920,
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpsenseHandler = (expense) => {
    //console.log("gelen item", expense);
    
    //expense.date=new Date(expense.date);
    //expense.date=new Date(2022,8,19);

    setExpenses([...expenses,expense]);
    //console.log("items", expenses);
  };

  // 1.ÇÖZÜM

  // const addNewExpense = (addItemExpense) => {
  //   const expense = {
  //     ...addItemExpense,
  //     id: Math.random().toString(),
  //   };

  //   console.log("In App.js");
  //   console.log(expense);
  // };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> 
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <br></br> */}

        {/* <h2>Lets get started !!!</h2> */}

        <NewExpense saveNewExpense={addExpsenseHandler}></NewExpense>
        <Expenses items={expenses}></Expenses>
      </header>
    </div>
  );

  //2.ÇÖZÜM
  // return React.createElement('div',
  // {},
  // React.createElement('h2',{},'Lets get the started'),
  // React.createElement(Expenses,{items:expenses})

  // )
};

export default App;
