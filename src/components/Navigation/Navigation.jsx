import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'
const Navigation = () => {
    return (
      <>
        <Navbar
          id="header-style"
          className="py-3 style-color"
          collapseOnSelect
          expand="lg"
          variant="dark"
          sticky="top"
        >
          <Container>
            <Navbar.Brand
              as={Link}
              to="/"
              className="d-flex align-items-center"
            >
              <img
                className="navbar-img"
                src="https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt=""
              />
              <i className="fs-3 fw-bold ">
                <span className="text-color">Laptop</span><span className="word-color"> BD Zone</span>
              </i>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto mx-auto navbar-style">
                <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                <Nav.Link as={Link} to="/reviews">REVIEWS</Nav.Link>
                <Nav.Link as={Link} to="/dashboard">DASHBOARD</Nav.Link>
                <Nav.Link as={Link} to="/blog">BLOGS</Nav.Link>
                <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Navigation;