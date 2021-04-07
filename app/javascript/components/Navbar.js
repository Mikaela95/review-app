import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Restaurant Reviews</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/logout">Log out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export { NavBarComponent };
