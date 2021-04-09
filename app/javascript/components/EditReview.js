import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const EditReview = (props) => {
  const [formState, setFormState] = useState({
      name: "",
      description: "",
      rating: "",
  });
  const [reviewsList, setReviewsList] = useState([]);
  
  const handleEditReview = (review, newData) => {
    const newReview = [...reviewsList];
    newReview[review] = newData;
    setReviewsList(newReview);

    fetch(`/api/v1/reviews/${review}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    }).then((response) => {
      console.log("PUT response:", response);
    });
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const newState = { ...formState };
    newState[e.target.name] = e.target.value;
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    // window.location.reload();
    e.preventDefault();
    handleEditReview(props.reviewData.id, formState);
  }; 


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row style={{ margin: "20px -5px" }}>
        <Col xs={4}>
          <Form.Control
            placeholder="Your name"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            required
          />
        </Col>
        <Col>
          <Form.Control
            placeholder="Description"
            name="description"
            value={formState.description}
            onChange={handleInputChange}
            required
          />
        </Col>
        <Col>
          <Form.Control
            placeholder="Rating out of 5"
            name="rating"
            value={formState.rating}
            onChange={handleInputChange}
            required
          />
        </Col>
        <Col>
          <Button type="submit">Edit Review</Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export { EditReview };
