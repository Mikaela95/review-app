import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CategoryItem } from "./CategoryItem";

// This will hold the form that will be used be each category

const ExpenseContainer = () => {
  const [expensesList, setExpensesList] = useState([]);

  const handleExpenseFormSubmit = (name, estimated, actual) => {
    console.log("expense form submit test");

    const newExpense = { name: name, estimated: estimated, actual: actual };

    const newExpenses = [...expensesList];
    newExpenses.push(newExpense);
    setExpensesList(newExpenses);

    fetch("http://localhost:9000/api/expenses/new-expense", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExpense),
    }).then((response) => {
      console.log("use clases: response:", response);
    });
  };

  return (
    <div>
      <h2>Testing expense container</h2>
      <CategoryItem submit={handleExpenseFormSubmit} />
    </div>
  );
};

export { ExpenseContainer };
