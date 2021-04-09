import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Review } from './Review'
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from 'react-bootstrap/Button'
import { DeleteReview } from "./DeleteReview";

const Restaurant = (props) => {
	const [restaurant, setRestaurant] = useState([]);
	const [review, setReview] = useState([]);
	const [loaded, setLoaded] = useState(false);

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


	return (
		<div>
			<p>{restaurant.name}</p>
			<p>Delivery price: {restaurant.delivery}</p>
			<Button variant="primary">Add</Button>
			{ 
				loaded && 
				(
					<CardGroup >
				        <Row md={8} style={{justifyContent: 'space-evenly'}}>
				          {restaurant.reviews.map((el) => (
				            <Card className="categoryCard" key={el.id}>
				                <Card.Body style={{color: 'black'}}>
					                <Link to={`delete/${restaurant.id}`}>
					                	<Button>Delete</Button>
					                </Link>

				                	
					                
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
				)
			}
		</div>
	)
}

export { Restaurant }