import React, { useState } from "react";
import { Form, Button, Container, Modal, InputGroup } from "react-bootstrap";
import { FaEnvelope, FaCommentDots } from "react-icons/fa";

export default function Contatti() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui puoi inviare la mail tramite API
    handleShow();
    setEmail("");
    setMessage("");
  };

  return (
    <div style={{ backgroundColor: "#f4f4f4", minHeight: "100vh", padding: "60px 20px" }}>
      <Container className="text-center mb-5">
        <h2 className="fw-bold mb-3">Contattaci</h2>
        <p className="fs-5 text-muted">
          Hai domande sui nostri programmi di allenamento o sui prezzi? 
          Compila il modulo e ti risponderemo al più presto!
        </p>
      </Container>

      <Container style={{ maxWidth: "600px", background: "#fff", padding: "30px", borderRadius: "15px", boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formEmail">
            <Form.Label className="fw-bold">Email</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FaEnvelope />
              </InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formMessage">
            <Form.Label className="fw-bold">Messaggio</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FaCommentDots />
              </InputGroup.Text>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Scrivi qui il tuo messaggio..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          <Button type="submit" variant="danger" className="w-100 py-2 fw-bold">
            Invia messaggio
          </Button>
        </Form>
      </Container>

      {/* Modale conferma */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Messaggio inviato con successo!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          Grazie per averci contattato. Ti risponderemo al più presto possibile.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose} className="w-100">
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
