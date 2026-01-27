import React from "react";
import { useState } from "react";
import { Form, Button, Container, Modal } from "react-bootstrap";
import Header from "./Header";
export default function Contatti() {
 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{ padding: 60 }}>
      <Container style={{ fontSize: 20, textAlign: "center",marginBottom:30 }}>
        {" "}
        Hai domande sul nostro servizio? Vorresti maggiori informazioni sui
        nostri programmi di allenamento o sui nostri prezzi? Compila il nostro
        modulo di contatto online e ti risponderemo al più presto possibile.
      </Container>

      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Cosa vorresti comunicarci?</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
  
          
        </Form>
        <Button variant="danger" onClick={handleShow}>
        Invia
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Email inviata con successo ad IronGym</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ti risponderemo al più presto, grazie!
        </Modal.Body>
        <Header/>
      </Modal>
    </div>
  );
}
