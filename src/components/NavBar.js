import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import backImage from "./back.png";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      collapseOnSelect
      className="custom-navbar"
      style={{
        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom: "0",
      }}
    >
      <Container fluid className="align-items-center">
        {/* ✅ Logo + Text */}
        <Navbar.Brand as={Link} to="/" className="navbar-logo d-flex align-items-center">
          <img
            src="/logo1.png"
            alt="CryoEM Logo"
            height="70"
            className="d-inline-block align-top me-2"
          />
          <span className="navbar-brand-text">SSHexa Robotics</span>
        </Navbar.Brand>

        {/* ✅ Toggle for small screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={Link} to="/" className="nav-link-text">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="nav-link-text">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-link-text">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" className="nav-link-text">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/casestudies" className="nav-link-text">
              Case Studies
            </Nav.Link>
            <Nav.Link as={Link} to="/contactus" className="nav-link-text">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
