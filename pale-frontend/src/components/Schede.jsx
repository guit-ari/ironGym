import React, { useState, useEffect } from "react";
import {
  Card,
  Col,
  Row,
  Button,
  Form,
  Modal,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import WorkoutService from "../services/workoutService";

export default function Schede() {
  const [schede, setSchede] = useState([]);
  const [nome, setNome] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [show, setShow] = useState(false);

  const fetchSchede = async () => {
    const data = await WorkoutService.getAllSchede();
    setSchede(data);
  };

  useEffect(() => {
    fetchSchede();
  }, []);

  const handleEliminaClick = async (id) => {
    if (window.confirm("Sei sicura di voler eliminare questa scheda?")) {
      await WorkoutService.deleteScheda(id);
      fetchSchede();
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (!nome.trim()) return;

    const nuovaScheda = { nome, descrizione };
    await WorkoutService.createScheda(nuovaScheda);
    setNome("");
    setDescrizione("");
    setShow(false);
    fetchSchede();
  };

  return (
    <Container className="my-5">

      {/* HERO / INTRO */}
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-3">Le tue schede di allenamento</h2>
        <p className="fs-5 text-muted">
          Trova ispirazione tra le schede già pronte o crea la tua scheda personalizzata.
          Allenati con facilità e rimani motivata!
        </p>
        <Button
          variant="danger"
          onClick={() => setShow(true)}
          className="mt-3 px-4"
        >
          Crea la tua scheda
        </Button>
      </div>

      {/* MODALE CREAZIONE */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Crea una nuova scheda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleClick}>
            <Form.Group controlId="formNome" className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Inserisci il nome della scheda"
                required
              />
            </Form.Group>
            <Form.Group controlId="formDescrizione" className="mb-3">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={descrizione}
                onChange={(e) => setDescrizione(e.target.value)}
                placeholder="Scrivi una breve descrizione"
              />
            </Form.Group>
            <Button type="submit" variant="danger" className="w-100">
              Crea scheda
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* LISTA SCHEDE */}
      <Row className="g-4">
        {schede.length === 0 && (
          <p className="text-center text-muted fs-5">Nessuna scheda disponibile.</p>
        )}
        {schede.map((scheda) => (
          <Col
            key={scheda.workoutLogId}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex"
          >
            <Card className="w-100 shadow-sm border-0 d-flex flex-column hover-shadow">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold">{scheda.nome}</Card.Title>
                <Card.Text className="flex-grow-1 text-muted">
                  {scheda.descrizione || "Nessuna descrizione"}
                </Card.Text>
                <div className="mt-auto d-flex gap-2">
                  <Link
                    to={`/dettaglischeda/?workoutLogId=${scheda.workoutLogId}`}
                    className="flex-grow-1 text-decoration-none"
                  >
                    <Button
                      variant="dark"
                      onClick={() => console.log(scheda.workoutLogId)}
                      className="w-100"
                    >
                      VAI AL PROGRAMMA
                    </Button>
                  </Link>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => handleEliminaClick(scheda.workoutLogId)}
                  >
                    Elimina
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
