import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const AddExpense = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    projectedExpense: "",
    actualExpense: "",
  });
  
  const [expensesList, setExpensesList] = useState([]);

  const handleExpenseFormSubmit = (name, estimated, actual, category) => {
    
    console.log("expense form submit test");

    const newExpense = {
      name: name,
      projectedExpense: estimated,
      actualExpense: actual,
      categoryId: category,
    };
    
    const newExpenses = [...expensesList];
    newExpenses.push(newExpense);
    setExpensesList(newExpenses);

    fetch("http://localhost:4000/api/expenses/new-expense", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExpense),
    }).then((response) => {
      console.log("use clases: response:", response);
      window.location.reload(false); 
    });
  };

  const handleInputChange = (e) => {
    const newState = { ...formState };
    newState[e.target.name] = e.target.value;
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    /* console.log("handle submit test");
    console.log(props); */
    e.preventDefault();
    handleExpenseFormSubmit(
      formState.name,
      formState.projectedExpense,
      formState.actualExpense,
      props.data
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row style={{ margin: "20px -5px" }}>
        <Col xs={7}>
          <Form.Control
            placeholder="Expense Item"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            required
          />
        </Col>
        <Col>
          <Form.Control
            placeholder="Estimated"
            name="projectedExpense"
            value={formState.projectedExpense}
            onChange={handleInputChange}
            required
          />
        </Col>
        <Col>
          <Form.Control
            placeholder="Actual"
            name="actualExpense"
            value={formState.actualExpense}
            onChange={handleInputChange}
            required
          />
        </Col>
        <Col>
          <Button type="submit">Add Expense</Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export { AddExpense };
