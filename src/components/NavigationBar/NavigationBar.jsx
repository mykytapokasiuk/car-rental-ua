import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import css from './NavigationBar.module.css';

const NavigationBar = () => {
  const { pathname } = useLocation();
  const homePage = pathname === '/';

  return (
    <>
      <Navbar
        className={css.navBarContainer}
        data-bs-theme={homePage ? 'dark' : 'light'}
        collapseOnSelect
        expand={false}
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <h1 className={homePage ? css.navBarBrand : css.navBarBrandBlue}>
              EasyDrive
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle
            style={{ border: 'none' }}
            aria-controls={`offcanvasNavbar-expand-xl`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
            placement="end"
            style={
              homePage
                ? { backgroundColor: 'rgba(29, 102, 124, 0.9)' }
                : { backgroundColor: 'rgba(51, 112, 255, 0.9)' }
            }
          >
            <Offcanvas.Header
              style={{ paddingBottom: '0px' }}
              closeButton
              data-bs-theme="dark"
            >
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                <h2 className={homePage ? css.navbarMenu : css.navbarMenuWhite}>
                  Menu
                </h2>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ paddingTop: '0px' }}>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" eventKey="1">
                  <p
                    className={
                      homePage ? css.navBarLinkText : css.navBarLinkTextWhite
                    }
                  >
                    Home
                  </p>
                </Nav.Link>
                <Nav.Link as={Link} to="/catalog" eventKey="2">
                  <p
                    className={
                      homePage ? css.navBarLinkText : css.navBarLinkTextWhite
                    }
                  >
                    Catalog
                  </p>
                </Nav.Link>
                <Nav.Link as={Link} to="/favorites" eventKey="3">
                  <p
                    className={
                      homePage ? css.navBarLinkText : css.navBarLinkTextWhite
                    }
                  >
                    Favorites
                  </p>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
