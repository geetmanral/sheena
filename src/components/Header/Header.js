import React, { useState } from 'react';
import './Header.scss';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../../assests/image/logo.png';
import { Link } from "react-router-dom";
const Header = (props) => {


  return (
    <Navbar expand="lg" className="nav-Header">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            className="comment-icon"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link  as={Link} to="/">Company</Nav.Link>
            <Nav.Link  as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link  as={Link} to="/service">Service</Nav.Link>
            <Nav.Link  as={Link} to="/partnership">Partnership</Nav.Link>
            <Nav.Link  as={Link} to="/signin">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
