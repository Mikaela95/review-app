import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Review } from './Review'
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from 'react-bootstrap/Button'
import { DeleteReview } from "./DeleteReview";
import { AddReview } from "./AddReview";
import { EditReview } from "./EditReview";

const Restaurant = (props) => {
	const [restaurant, setRestaurant] = useState([]);
	const [review, setReview] = useState([]);
	const [active, setActive] = useState("");
	const [loaded, setLoaded] = useState(false);
	const [reviewData, setReviewData] = useState({ id: "" });

	useEffect(() => {
		const params = props.match.params.id;
		fetch(`/api/v1/restaurants/${params}`)
			.then(response => response.json())
      		.then(data => {
      			console.log('data:', data);
      			setRestaurant(data)
      			setLoaded(true)
      		})
      		.catch((error) => console.log('CATCH error:', error))
	}, [])

	const handleDelete = (e) => {
    e.preventDefault();
    setActive("delete");
    setReviewData({ id: e.currentTarget.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setActive("edit");
    setReviewData({ id: e.currentTarget.value });
  };

  const renderReviewItems = () => { 
  return (
  
    loaded && 
    (
      <CardGroup >
            <Row md={8} style={{justifyContent: 'space-evenly'}}>
              {restaurant.reviews.map((el) => (
                <Card className="categoryCard" key={el.id}>
                    <Card.Body style={{color: 'black'}}>
                      <Button value={el.id} variant="danger" onClick={handleDelete}>Delete</Button>
                      <Button variant="warning" style={{ margin: "0rem 1rem" }} value={el.id} onClick={handleEdit}>
                    Edit
                  </Button>
                       <Card.Title>{el.name}</Card.Title>
                        <Card.Text>{el.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Rating score {el.rating}</small>
                    </Card.Footer>
                </Card>
              ))}
            </Row>
        </CardGroup>
    ))			
  }


	return (
		<div>
			<p>{restaurant.name}</p>
			<p>Delivery price: {restaurant.delivery}</p>	
			<div>
				<p>Add a review:</p>
				<Button variant="primary" style={{ marginLeft: "1rem", marginBottom: "1rem" }} onClick={() => setActive("add")}>ADD</Button>
				{renderReviewItems()}
			</div>
			<div>
				{active === "add" && <AddReview data={props.match.params.id} />}
		        {active === "delete" && (
		          <DeleteReview
		            data={props.match.params.id}
		            setModalShow={true}
		            reviewData={reviewData}
		          />
		        )}
		        {active === "edit" && (
		          <EditReview
		            data={props.match.params.id}
		            setModalShow={true}
		            reviewData={reviewData}
		          />
		        )}
			</div>
		</div>
	)
}

export { Restaurant }