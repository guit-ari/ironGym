import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Row, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardCategorie from "./CardCategorie";

export default function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="../src/images/caroselloHome/1087580.jpg"
            alt="First slide"
            style={{ width: 800, height: 650 }}
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="../src/images/caroselloHome/pesi.jpg"
            alt="Second slide"
            style={{ width: 800, height: 650 }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/images/caroselloHome/pesi3.jpg"
            alt="Third slide"
            style={{ width: 800, height: 650 }}
          />
        </Carousel.Item>
      </Carousel>

      <Card className="text-center">
        <Card body className="py-4" style={{ fontSize: 25 }}>
          IronGym è il software per l'allenamento che mette a dispozione tutti
          gli strumenti di cui hai bisogno. <br /> Tutto con una grafica , una
          semplicità d'uso ed una professionalità che non hai mai visto prima.
        </Card>
      </Card>

      <Card className="text-center ">
        <Card body className=" bg-black text-white" style={{ fontSize: 18 }}>
          CENTINAIA DI ESERCIZI IN GRAFICA 3D A
          <h4 className="text-danger">TUA DISPOSIZIONE</h4>
        </Card>
      </Card>

      <Row className="pt-5 px-5">
        <Container className=" text-center my-4" style={{ fontSize: 25 }}>
          Rimani motivato e concentrato sui tuoi obiettivi di fitness,
          scegliendo tra le nostre categorie di workout. Con la nostra
          funzionalità di visualizzazione per categorie, puoi selezionare
          facilmente il tipo di allenamento che desideri e creare la tua routine
          personalizzata. Dai un'occhiata alle nostre categorie di allenamento e
          inizia a raggiungere i tuoi obiettivi di fitness oggi stesso!
        </Container>
        <CardCategorie />
      </Row>
    </div>
  );
}
