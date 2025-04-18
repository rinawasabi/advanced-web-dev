import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Custom navigation bar component
function CustomNavbar({ currentUser }) {
  return (
    <Navbar
      bg="light"
      className="navbar-custom px-5 py-2 d-flex justify-content-between align-items-center mb-2"
    >
      {/* Left side: logo and greeting */}
      <div className="d-flex align-items-center gap-3">
        <Navbar.Brand as={Link} to="/home" className="mb-0">
          <img src="/logo.png" alt="Makunote" width="140" />
        </Navbar.Brand>
        {currentUser && (
          <span className="text-muted" style={{ fontSize: "15px" }}>
            What should we cook, {currentUser.username}?
          </span>
        )}
      </div>

      {/* Right side: navigation links */}
      <Nav className="d-flex align-items-center gap-4">
        <Nav.Link as={Link} to="/home" className="nav-link-custom">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/add" className="nav-link-custom">
          Add Recipe
        </Nav.Link>
        <Nav.Link as={Link} to="/my" className="nav-link-custom">
          My Recipe
        </Nav.Link>
        <Nav.Link as={Link} to="/about" className="nav-link-custom">
          About
        </Nav.Link>
        {!currentUser && (
          <Nav.Link as={Link} to="/login" className="nav-link-custom">
            Log In
          </Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;
