import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardColumns from "react-bootstrap/CardColumns";

import "./ExpenseList.css";

const ExpenseList = () => {
  // Fetch the category -> currently all
  useEffect(() => {
    fetchItem();
  }, []);

  const [items, setItem] = useState([]);

  const fetchItem = async () => {
    const fetchItem = await fetch(
      "http://localhost:4000/api/categories/all-categories",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    const items = await fetchItem.json();
    setItem(items);
    console.log(items);
    console.log(items[0]);
  };

  return (
    <div>
      <CardGroup >
        <Row md={4} style={{justifyContent: 'space-evenly'}}>
          {items.map((item) => (
            <Card className="categoryCard" key={item._id}>
              <Link to={`/category/${item._id}`}>
                <Card.Img variant="top" src={`../images/${item.name}.jpg`} />
                <Card.Body style={{color: 'black'}}>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Link>
            </Card>
          ))}
        </Row>
      </CardGroup>
    </div>
  );
};

export { ExpenseList };
