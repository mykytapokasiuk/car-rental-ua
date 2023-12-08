import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
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
            <h1
              className={homePage ? css.navBarBrand : css.navBarBrandBlue}
              title="Home"
            >
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
                <Nav.Link as={NavLink} to="/" eventKey="/">
                  <p
                    className={
                      homePage ? css.navBarLinkText : css.navBarLinkTextWhite
                    }
                    title="Home"
                  >
                    Home
                  </p>
                </Nav.Link>
                <Nav.Link as={Link} to="/catalog" eventKey="catalog">
                  <p
                    className={
                      homePage ? css.navBarLinkText : css.navBarLinkTextWhite
                    }
                    title="Catalog"
                  >
                    Catalog
                  </p>
                </Nav.Link>
                <Nav.Link as={Link} to="/favorites" eventKey="favorites">
                  <p
                    className={
                      homePage ? css.navBarLinkText : css.navBarLinkTextWhite
                    }
                    title="Favorites"
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
