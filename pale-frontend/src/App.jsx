import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contatti from "./components/Contatti";
import Schede from "./components/Schede";
import Workouts from "./components/CardWorkouts";
import Home from "./components/Home";
import Footer from "./components/Footer";
import DettagliScheda from "./components/DettagliScheda";
import DettagliCategorie from "./components/DettagliCategorie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar bg="danger" variant="dark">
          <Container>
           
            <Navbar.Brand as={Link} to="/home">
           <h2>IronGym</h2>
           
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/schede/*">
                <h6>Schede allenamento</h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/esercizi">
                <h6>Esercizi</h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/contatti">
                <h6>Contatti</h6>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div>

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/schede/*" element={<Schede />} />
            <Route path="/esercizi" element={<Workouts />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/dettaglischeda" element={<DettagliScheda />} />
            <Route path="/dettaglicategoria" element={<DettagliCategorie />} />
          </Routes>
        </div>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
