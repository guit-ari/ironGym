import React from "react";
import { useState, useEffect } from "react";
import {
  Card,
  Col,
  Row,
  Button,
  Form,
  Modal,
  Stack,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Schede() {
  const [schede, setSchede] = useState([]);
  const [nome, setNome] = useState("");
  const [show, setShow] = useState(false);
  const [descrizione, setDescrizione] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/workoutLogs/getAll")
      .then((resp) => resp.json())
      .then((data) => {
        setSchede(data);
      });
  });

  const handleEliminaClick = (id) => {
    // Invio della richiesta al backend per eliminare la scheda
    console.log(id);
    fetch("http://localhost:8080/api/workoutLogs/delete/" + id, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Chiamata alla funzione onSchedaEliminata per notificare il componente padre
          return response.json();
        } else {
          throw new Error(
            "Errore durante l'eliminazione della scheda di allenamento"
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const nuovaScheda = { nome: nome, descrizione: descrizione };
    fetch("http://localhost:8080/api/workoutLogs/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuovaScheda),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
          // TODO: aggiornare la lista delle schede
        } else {
          console.error("Errore durante la creazione della scheda");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    // Chiudere la finestra modale
    setShow(false);
  };
  const handleDettagliClick = (id) => {
    fetch("http://localhost:8080/api/workoutLogs/workoutLogs/" + id)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Container className="text-center my-4" style={{ fontSize: 25 }}>
        Non importa quale sia il tuo livello di fitness <br />
        troverai l'ispirazione e il supporto di cui hai bisogno per raggiungere
        i tuoi obiettivi nella nostra applicazione. <br />
        Se già sei allenato prova una di queste schede, oppure creane una fatta
        su misura per te.
      </Container>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Crea una nuova scheda </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleClick}>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDescrizione">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={descrizione}
                onChange={(event) => setDescrizione(event.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="outline-danger" size="sm">
              Crea scheda
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Row>
        <Col
          className="mt-4 mx-auto justify-content-center"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "10px",
            textAlign: "center",
          }}
        >
          {schede.map((value, workoutLogId) => {
            return (
              <Card style={{ width: "18rem" }} key={workoutLogId}>
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{value.nome}</Card.Title>
                  <Card.Text>{value.descrizione}</Card.Text>
                  <Stack gap={2} className="col mx-auto">
                    <Link
                      className="mt-auto "
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/dettaglischeda/?workoutLogId=${value.workoutLogId}`}
                    >
                      <Button
                        variant="dark"
                        className="mt-auto "
                        onClick={() => handleDettagliClick(value.workoutLogId)}
                      >
                        VAI AL PROGRAMMA
                      </Button>
                    </Link>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleEliminaClick(value.workoutLogId)}
                    >
                      Elimina
                    </Button>
                  </Stack>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
      <div className="d-flex justify-content-center">
        <Button
          variant="outline-danger"
          onClick={() => setShow(true)}
          className="p-2 mt-4"
        >
          Crea la tua scheda di allenamento
        </Button>
      </div>
    </>
  );
}
