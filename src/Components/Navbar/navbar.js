import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { SiCcleaner } from "react-icons/si";
import "./navbar.css";
import { Link } from "react-router-dom";

function AppNavbarr() {
  return (
    <Navbar collapseOnSelect expand="lg" id="bg-body-tertiary" sticky="top">
      <Container>
        <Link to="/" className="nav-link">
          <SiCcleaner className="brand-icon" />
          LEANLY
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/services" className="nav-link">
              Services
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </Nav>
          <Nav id="me-auto">
            <Link to="/contact-us" className="nav-link">
              Contact US
            </Link>
            <NavDropdown title="Locations" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cairo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Giza</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sokhna</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Soon In Sahel
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbarr;
