import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardColumns from "react-bootstrap/CardColumns";
import { NavBarComponent } from "./Navbar.js";

import "./ExpenseList.css";

const RestaurantList = () => {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('/api/v1/restaurants', {
      headers: {
        'token': window.localStorage.getItem('token')
      }
    }).then(response => response.json())
      .then(data => {
        console.log('data:', data);
        if (data.length) {
          setRestaurants(data)
        }
      })
      .catch((error) => console.log('CATCH error:', error))
  }, [])

  return (
  <div>
    <CardGroup >
      <Row md={4} style={{justifyContent: 'space-evenly'}}>
          {restaurants.map((restaurant) => (
              <Card className="categoryCard" key={restaurant.id}>
                <Link to={`restaurants/${restaurant.id}`}>
                  <Card.Img variant="top" src={restaurant.image_url}/>
                  <Card.Body style={{color: 'black'}}>
                    <Card.Title>{restaurant.name}</Card.Title>
                    <Card.Text style={{color: 'black'}}>{restaurant.delivery}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Number of reviews </small>
                  </Card.Footer>
                </Link>
              </Card>
          ))}
      </Row>
    </CardGroup >
  </div>
  );
};

export { RestaurantList };
