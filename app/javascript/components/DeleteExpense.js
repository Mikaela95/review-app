import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const DeleteExpense = (props) => {
  const [modalShow, setModalShow] = useState(props.setModalShow);
  const [show, setShow] = useState(false);
  /* const [expensesList, setExpensesList] = useState([]); */
  //console.log(props.expenseData);

  const successNotification = () => {
    return (
      <Alert show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>
    );
  };

  const handleSubmit = (e) => {
    //e.preventDefault();
    console.log("handleSubmit");
    console.log(props.expenseData.id);
    handleDeleteExpense(props.expenseData.id);
  };

  const handleDeleteExpense = (expense) => {
    fetch(`http://localhost:4000/api/expenses/delete-expense/${expense}`, {
      method: "DELETE",
      body: JSON.stringify(expense),
    }).then((response) => {
      console.log("DELETE response:", response);
      window.location.reload(false);
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
            Delete Expense
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to delete this expense. This cannot be undone.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit} variant="danger">
            Yes, delete expense
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

export { DeleteExpense };
