import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { Link } from "react-router-dom";

function Navbarr() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favlist">FavList</Nav.Link>
            <Nav.Link href="/movielist">MovieList</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarr;