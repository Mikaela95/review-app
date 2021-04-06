import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import * as Icon from "react-bootstrap-icons";
import { AddExpense } from "./AddExpense";
import { DeleteExpense } from "./DeleteExpense";
import { EditExpense } from "./EditExpense";

const CategoryItem = ({ match }) => {
  const [category, setCategory] = useState([]);
  const [active, setActive] = useState("");
  const [expenseData, setExpenseData] = useState({ id: "" });
  console.log(match);

  useEffect(() => {
    fetchCategory();
    console.log(match);
  }, []);

  const [expenses, setExpense] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchCategory = async () => {
    const fetchCategory = await fetch(
      `http://localhost:4000/api/categories/one-category/${match.params.id}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const category = await fetchCategory.json();
    setCategory(category);
    console.log(category);
  };

  const fetchExpenses = async () => {
    const fetchExpenses = await fetch(
      `http://localhost:4000/api/expenses/one-category/all-expenses/${match.params.id}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const expenses = await fetchExpenses.json();
    setExpense(expenses);
    console.log(expenses);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setActive("delete");
    setExpenseData({ id: e.currentTarget.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setActive("edit");
    setExpenseData({ id: e.currentTarget.value });
  };

  const renderExpenseItems = () => {
    return expenses.map((expense) => (
      <tr>
        <td>{expense.name}</td>
        <td>{expense.projectedExpense}</td>
        <td>{expense.actualExpense}</td>
        <td>difference value</td>
        <Button
          variant="warning"
          style={{ margin: "0rem 1rem" }}
          value={expense._id}
          onClick={handleEdit}
        >
          <Icon.Pencil />
        </Button>
        <Button value={expense._id} variant="danger" onClick={handleDelete}>
          <Icon.Trash inverted />
        </Button>
      </tr>
    ));
  };

  return (
    <div>
      <h1>Category: {category.name}</h1>
      <p>{category.description}</p>
      <div>
        Add a new expense item:{" "}
        <Button
          variant="primary"
          style={{ marginLeft: "1rem", marginBottom: "1rem" }}
          onClick={() => setActive("add")}
        >
          <Icon.Plus />
        </Button>
      </div>
      <div>
        {/* Need to reset the value of active after each button click */}
        {active === "add" && <AddExpense data={match.params.id} />}
        {active === "delete" && (
          <DeleteExpense
            data={match.params.id}
            setModalShow={true}
            expenseData={expenseData}
          />
        )}
        {active === "edit" && (
          <EditExpense
            data={match.params.id}
            setModalShow={true}
            expenseData={expenseData}
          />
        )}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Expense Item</th>
              <th>Estimated</th>
              <th>Actual</th>
              <th>Difference</th>
              <th>Amendments</th>
            </tr>
          </thead>
          <tbody>{renderExpenseItems()}</tbody>
        </Table>
      </div>
    </div>
  );
};

export { CategoryItem };
