import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar expand="lg" sticky="top" className="shadow-sm py-2 px-3" bg="white">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/home" className="fw-bold fs-3 text-danger">
          IronGym
        </Navbar.Brand>

        {/* Toggle per mobile */}
        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link as={Link} to="/schede" className="fw-semibold text-dark">
              Schede
            </Nav.Link>
            <Nav.Link as={Link} to="/esercizi" className="fw-semibold text-dark">
              Esercizi
            </Nav.Link>
            <Nav.Link as={Link} to="/contatti" className="fw-semibold text-dark">
              Contatti
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
