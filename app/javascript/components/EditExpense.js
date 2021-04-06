import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const EditExpense = (props) => {
  const [modalShow, setModalShow] = useState(true);
  const [formState, setFormState] = useState({
    name: "",
    projectedExpense: "",
    actualExpense: "",
  });
  const [expensesList, setExpensesList] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const newState = { ...formState };
    newState[e.target.name] = e.target.value;
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    window.location.reload();
    setModalShow(false);
    handleEditExpense(props.expenseData.id, formState);
  };

  const handleEditExpense = (expense, newData) => {
    const newExpenses = [...expensesList];
    newExpenses[expense] = newData;
    setExpensesList(newExpenses);
    //console.log(formState);

    fetch(`http://localhost:4000/api/expenses/update-expense/${expense}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    }).then((response) => {
      console.log("PUT response:", response);
    });
  };

  const MyVerticallyCenteredModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Expense
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit} variant="warning" type="submit">
            Yes, edit expense
          </Button>
          <Button onClick={props.onHide}>Cancel, keep expense</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export { EditExpense };
