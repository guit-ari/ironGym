import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Row, Container, Card, Badge } from "react-bootstrap";
import CardCategorie from "./CardCategorie";
import { FaDumbbell, FaStopwatch, FaStar } from "react-icons/fa";

export default function Home() {
  const slides = [
    {
      img: "../src/images/caroselloHome/1.jpg",
      title: "IronGym",
      text: "Il tuo allenamento, finalmente intelligente.",
    },
    {
      img: "../src/images/caroselloHome/2.jpg",
      title: "Esercizi in 3D",
      text: "Ogni movimento spiegato in modo chiaro e preciso.",
    },
    {
      img: "../src/images/caroselloHome/3.jpg",
      title: "Raggiungi i tuoi obiettivi",
      text: "Routine personalizzate create su misura per te.",
    },
  ];

  return (
    <div>
      {/* HERO / CAROUSEL */}
      <Container fluid className="p-0">
        <Carousel fade>
          {slides.map((s, i) => (
            <Carousel.Item
              key={i}
              interval={3500}
              style={{ height: "60vh", minHeight: "400px" }}
            >
              <img
                className="d-block w-100 h-100"
                src={s.img}
                alt={s.title}
                style={{ objectFit: "cover" }}
              />
              {/* Overlay leggero per contrasto */}
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" />
              <Carousel.Caption className="text-start text-white">
                <h1 className="fw-bold display-4">{s.title}</h1>
                <p className="lead fs-5">{s.text}</p>
                <div className="mt-3">
                  <Badge bg="danger" className="me-2 py-2 px-3 fs-6">
                    Novità
                  </Badge>
                  <Badge bg="warning" text="dark" className="py-2 px-3 fs-6">
                    Consigliato
                  </Badge>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* PRESENTAZIONE / FEATURE */}
      <Container className="my-5">
        <Row className="g-4 justify-content-center">
          <Card className="col-md-5 text-center shadow-lg border-0 rounded-4 p-4">
            <FaDumbbell size={50} className="text-danger mb-3" />
            <Card.Body>
              <Card.Title className="fw-bold fs-4">Allenamento completo</Card.Title>
              <Card.Text className="text-muted">
                Tutti gli strumenti per creare routine efficaci e personalizzate.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="col-md-5 text-center shadow-lg border-0 rounded-4 p-4 bg-dark text-white">
            <FaStopwatch size={50} className="text-warning mb-3" />
            <Card.Body>
              <Card.Title className="fw-bold fs-4">Esercizi in 3D</Card.Title>
              <Card.Text>
                Guarda ogni movimento con chiarezza e precisione grazie alla grafica 3D.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="col-md-5 text-center shadow-lg border-0 rounded-4 p-4">
            <FaStar size={50} className="text-success mb-3" />
            <Card.Body>
              <Card.Title className="fw-bold fs-4">Motivazione costante</Card.Title>
              <Card.Text className="text-muted">
                Segui progressi, sfide e obiettivi per migliorare ogni giorno.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>

      {/* CATEGORIE */}
      <Container className="my-5 text-center">
        <p className="fs-5 lead">
          Scegli tra le nostre categorie di workout e crea la tua routine
          personalizzata. Rimani motivato, migliora ogni giorno.
        </p>

        <Row className="justify-content-center mt-4">
          <CardCategorie />
        </Row>
      </Container>
    </div>
  );
}
