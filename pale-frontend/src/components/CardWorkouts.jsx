import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Row,
  Button,
  Modal,
  Container,
  Stack,
} from "react-bootstrap";
import WorkoutService from "../services/workoutService";

export default function CardWorkouts() {
  const [workouts, setWorkouts] = useState([]);
  const [schede, setSchede] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);

  // Carica tutti i workout
  const fetchWorkouts = async () => {
    const data = await WorkoutService.getAllWorkouts();
    setWorkouts(data);
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const handleSchede = async (workoutId) => {
    setSelectedWorkoutId(workoutId);
    const schedeData = await WorkoutService.getAllSchede();
    setSchede(schedeData);
    setShowModal(true);
  };

  const handleAddToCard = async (logId) => {
    await WorkoutService.addWorkoutToScheda(logId, selectedWorkoutId);
    setShowModal(false);
    alert("Workout aggiunto con successo!");
  };

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-4">Esplora i nostri workout</h2>
      <p className="text-center text-muted fs-5 mb-5">
        Aggiungi i workout che preferisci alla tua scheda di allenamento
        personalizzata. Dai sollevamenti pesi ai circuiti cardio, c'è tutto!
      </p>

      <Row className="g-4">
        {workouts.map((w) => (
          <Col key={w.workoutId} xs={12} sm={6} md={4} lg={3} className="d-flex">
            <Card className="w-100 shadow-sm border-0 d-flex flex-column hover-shadow">
              <Card.Img
                variant="top"
                src={`../src/images/allImages/${w.nome.toLowerCase()}.png`}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold">{w.nome.toUpperCase()}</Card.Title>
                <Card.Text className="text-muted flex-grow-1">
                  Categoria: {w.categorie.descrizione}
                </Card.Text>
                <ul className="list-unstyled mb-3">
                  <li>Difficoltà: {w.difficoltà}</li>
                  <li>Gruppo muscolare: {w.gruppoMuscolare.gruppoMuscolare}</li>
                </ul>
                <Button
                  variant="danger"
                  onClick={() => handleSchede(w.workoutId)}
                  className="mt-auto"
                >
                  Aggiungi alla scheda
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* MODALE SELEZIONE SCHEDE */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Seleziona una scheda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {schede.length === 0 && (
            <p className="text-center text-muted">Non ci sono schede disponibili.</p>
          )}
          <Stack gap={2}>
            {schede.map((s) => (
              <Button
                key={s.workoutLogId}
                variant="outline-dark"
                onClick={() => handleAddToCard(s.workoutLogId)}
              >
                {s.nome}
              </Button>
            ))}
          </Stack>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
