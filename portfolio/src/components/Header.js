import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">Lexus Guevara</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ width: "100%", justifyContent: "flex-end" }}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="https://github.com/GuevaraLexus" target="_blank" rel="noopener noreferrer">GitHub</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/guevara-lexus-6957b02a8/" target="_blank" rel="noopener noreferrer">LinkedIn</Nav.Link>
            <NavDropdown title="Resume" id="basic-nav-dropdown">
              <NavDropdown.Item href="/resume.pdf" download>Download</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
