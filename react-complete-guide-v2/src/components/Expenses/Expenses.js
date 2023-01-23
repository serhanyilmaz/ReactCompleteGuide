import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const setFilteredYear = (year) => {
    //console.log("Seçilen yıl", year);

    // ExpensesFilter alt sınınftan gelen combobox value değeri EXpensese split up state ile geldi. Bu olayın içinde useState ile değer tekrar alt sınıf olan
    //ExpensesFilter a gönderildi. Buna two way binding denir.  Alttan üste sonra üstten alta
    setSelectedYear(year);
  };

  const filteredExpense = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        setFilteredYear={setFilteredYear}
      ></ExpensesFilter>

      <ExpensesChart expenses={filteredExpense}></ExpensesChart>
      <ExpensesList items={filteredExpense} />

      {/* <ExpenseItem
        date={props.items[0].date}
        title={props.items[0].title}
        price={props.items[0].price}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[1].date}
        title={props.items[1].title}
        price={props.items[1].price}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[2].date}
        title={props.items[2].title}
        price={props.items[2].price}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[3].date}
        title={props.items[3].title}
        price={props.items[3].price}
      ></ExpenseItem> */}
    </Card>
  );
};

export default Expenses;
