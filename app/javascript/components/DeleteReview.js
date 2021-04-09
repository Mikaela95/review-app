import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const DeleteReview = (props) => {
  const [modalShow, setModalShow] = useState(props.setModalShow);
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    console.log(props.reviewData.id);
    handleDeleteExpense(props.reviewData.id);
  };

  const handleDeleteExpense = (review) => {
    fetch(`/api/v1/reviews/${review}`, {
      method: "DELETE",
      body: JSON.stringify(review),
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
            Delete Review
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to delete this review. This cannot be undone.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit} variant="danger">
            Confirm
          </Button>
          <Button onClick={props.onHide}>Cancel</Button>
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

export { DeleteReview };
