import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Row, Container, Card, } from "react-bootstrap";
import CardCategorie from "./CardCategorie";

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
      {/* HERO */}
      <Container className="my-5">
        <Carousel fade className="rounded shadow-lg overflow-hidden">
          {slides.map((s, i) => (
            <Carousel.Item
              key={i}
              interval={3000}
              style={{ height: "55vh", minHeight: "380px" }}
            >
              <img
                className="d-block w-100 h-100"
                src={s.img}
                alt={s.title}
                style={{ objectFit: "cover" }}
              />

              {/* Overlay */}
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50" />

              <Carousel.Caption className="mb-4">
                <h1 className="fw-bold display-5">{s.title}</h1>
                <p className="lead">{s.text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* PRESENTAZIONE */}
      <Container className="my-5">
        <Card className="text-center border-0">
          <Card.Body>
            <Card.Text className="fs-4">
              IronGym è il software per l'allenamento che mette a disposizione
              tutti gli strumenti di cui hai bisogno.
              <br />
              Grafica moderna, semplicità d’uso e massima efficacia.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center bg-dark text-white mt-4">
          <Card.Body>
            <Card.Text className="fs-5">
              CENTINAIA DI ESERCIZI IN GRAFICA 3D
              <span className="text-danger fw-bold"> A TUA DISPOSIZIONE</span>
            </Card.Text>
          </Card.Body>
        </Card>
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
