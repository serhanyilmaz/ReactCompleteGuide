import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropDownChangeFilter = (event) => {

    event.preventDefault();

    props.setFilteredYear(event.target.value);
  };

  return (
    
     <div className="expenses-filter">
     <label className="expenses-filter label">Select by year</label>
      <select value={props.selected} className="expenses-filter select"   onChange={dropDownChangeFilter}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
     </div>
    
  );
};

export default ExpensesFilter;
