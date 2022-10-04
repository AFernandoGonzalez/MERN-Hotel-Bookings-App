import './mainnavbar.css'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <div>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">FastBooking</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>

              <Nav.Link href="#link">Link</Nav.Link>
              <button className="navButton">Register</button>
              <button className="navButton">Login</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default MainNavbar