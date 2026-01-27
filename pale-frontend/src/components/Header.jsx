import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar bg="danger" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/home" className="fw-bold fs-3">
          IronGym
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto text-center">
            <Nav.Link as={Link} to="/schede/*" className="fw-semibold">
              Schede allenamento
            </Nav.Link>
            <Nav.Link as={Link} to="/esercizi" className="fw-semibold">
              Esercizi
            </Nav.Link>
            <Nav.Link as={Link} to="/contatti" className="fw-semibold">
              Contatti
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
