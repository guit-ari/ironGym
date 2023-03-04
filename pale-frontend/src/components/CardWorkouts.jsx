import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  ListGroup,
  Row,
  Button,
  Modal,
  Form,
} from "react-bootstrap";

export default function CardWorkouts(workout) {
  const [workouts, setWorkouts] = useState([]);
  const [schede, setSchede] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/workout/getAll")
      .then((resp) => resp.json())
      .then((data) => {
        setWorkouts(data);
      });
  });

  const handleAddToCard = (logId, workoutId) => {
    setShowModal(true);
    fetch(`http://localhost:8080/api/workoutLogDetails/${logId}/workouts/${workoutId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ logId, workoutId }),
    })
      .then((response) => {
        if (response.ok) {
    
          setShowModal(false);

          console.log("Workout aggiunto con successo al workout log.");
        } else {
          console.error(
            "Errore durante l'aggiunta del workout al workout log."
          );
        }
      })
      .catch((error) => {
        console.error(
          "Si è verificato un errore durante la richiesta di aggiunta del workout al workout log.",
          error
        );
      });
  };

  const handleSchede = (workoutId) => {
    setSelectedWorkoutId(workoutId);
    fetch("http://localhost:8080/api/workoutLogs/getAll")
      .then((resp) => resp.json())
      .then((data) => setSchede(data));
    setShowModal(true);
  };

  return (
    <>
      <Card
        style={{
          fontSize: 24,
          textAlign: "center",
          marginTop: 30,
          border: "none",
        }}
      >
        Esplora la nostra vasta libreria di workout e aggiungi quelli che
        preferisci alla tua scheda di allenamento personalizzata. Con la nostra
        piattaforma online, hai accesso a tutti i nostri workout, dai programmi
        di sollevamento pesi ai circuiti cardiovascolari e molto altro ancora.
      </Card>

      <Row>
        <Col
          className="mt-4"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "10px",
            padding: "30px",
          }}
        >
          {workouts.map((value) => {
            return (
              <Card style={{ width: "18rem" }} key={value.workoutId}>
                <Card.Img
                  variant="top"
                  src={
                    "../src/images/allImages/" +
                    value.nome.toLowerCase() +
                    ".png"
                  }
                />
                <Card.Body>
                  <Card.Title>{value.nome.toUpperCase()}</Card.Title>
                  <Card.Text>
                    Categoria: {value.categorie.descrizione}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    Difficoltà: {value.difficoltà}
                  </ListGroup.Item>
                 
                  <ListGroup.Item>
                    Gruppo muscolare: {value.gruppoMuscolare.gruppoMuscolare}
                  </ListGroup.Item>
                </ListGroup>

                <Button
                  variant="outline-danger"
                  className="mt-auto "
                  onClick={() => handleSchede(value.workoutId)}
                >
                   Aggiungi alla scheda

                </Button>
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Seleziona una scheda</Modal.Title>
                  </Modal.Header>
             

                  <Modal.Body>
                    <ul>
                      {schede.map((scheda) => (
                        <li key={scheda.workoutLogId}>
                          <Button
                            variant="light"
                            onClick={() =>
                              handleAddToCard(
                                scheda.workoutLogId,
                                selectedWorkoutId
                              )
                            }
                          >
                            {scheda.nome}
                        
                          </Button>
                        </li>

                      ))}
                    </ul>
                   
                  </Modal.Body>
                  
                </Modal>
                
              </Card>
            );
          })}
        </Col>
      </Row>
    </>
  );
}
