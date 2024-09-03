import React from "react";
import "./header.css"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { PiCompassRoseDuotone } from "react-icons/pi";
const Header = () => (
  <div className="header-holder">
    <Navbar
      expand="lg"
      className="brand-name fixed-top bg-light w-100 px-3"
    >
      <Navbar.Brand href="/" className="fw-bold fs-5" >
      <h1>
      <PiCompassRoseDuotone size={50} /> FinkSupply

      </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto px-4 gap-lg-5 fw-bold RouteLinks ">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Nav>
        <Nav.Link href="/contact">
          <Button className="book-now-btn">Book Now</Button>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Header;
