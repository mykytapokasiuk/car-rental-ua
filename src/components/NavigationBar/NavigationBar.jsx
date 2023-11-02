import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import css from './NavigationBar.module.css';

const NavigationBar = () => {
  return (
    <Navbar expand="xl" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h1 className={css.navBarText}>Car Rental</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              <p className={css.navBarLinkText}>Home</p>
            </Nav.Link>
            <Nav.Link as={Link} to="/catalog">
              <p className={css.navBarLinkText}>Catalog</p>
            </Nav.Link>
            <Nav.Link as={Link} to="/favorites">
              <p className={css.navBarLinkText}>Favorites</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
