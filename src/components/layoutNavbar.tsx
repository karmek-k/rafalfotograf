import { Link } from 'gatsby';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const LayoutNavbar: React.FC = () => {
  return (
    <Navbar>
      <Container className="justify-content-between">
        <Navbar.Brand>Rafał Woźniak</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-links" />
        <Navbar.Collapse id="navbar-links">
          <Nav>
            <Nav.Link>
              <Link to="/" className="nav-link">
                Strona główna
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LayoutNavbar;
