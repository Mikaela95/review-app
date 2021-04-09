import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const AddReview = (props) => {
	const [reviewsList, setReviewsList] = useState([]);
	const [formState, setFormState] = useState({
	    name: "",
	    description: "",
	    rating: "",
  	});

  	const handleReviewFormSubmit = (name, description, rating, restaurant) => {
    
    console.log("expense form submit test");

    const newReview = {
      name: name,
      description: description,
      rating: rating,
      restaurant_id: restaurant,
    };
    
    const newReviews = [...reviewsList];
    newReviews.push(newReview);
    setReviewsList(newReviews);

    fetch("/api/v1/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    }).then((response) => {
      console.log("use clases: response:", response);
     // window.location.reload(false); 
    });
  };

  const handleInputChange = (e) => {
    const newState = { ...formState };
    newState[e.target.name] = e.target.value;
    setFormState(newState);
  };
  
  const handleSubmit = (e) => {
    //e.preventDefault();
    handleReviewFormSubmit(
      formState.name,
      formState.description,
      formState.rating,
      props.data
    );
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
          <Button type="submit">Add Review</Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export { AddReview };
