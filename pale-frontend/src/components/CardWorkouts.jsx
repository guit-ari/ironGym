import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Row,
  Button,
  Modal,
  Container,
  Stack,
  Badge
} from "react-bootstrap";
import { FaDumbbell, FaBolt, FaUsers } from "react-icons/fa";
import WorkoutService from "../services/workoutService";
import Toast from "./Toast";
import ScrollToTop from "./ScrollToTop";
import "./CardWorkouts.css";

export default function CardWorkouts() {
  const [workouts, setWorkouts] = useState([]);
  const [schede, setSchede] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

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
    const result = await WorkoutService.addWorkoutToScheda(
      logId,
      selectedWorkoutId
    );
    setShowModal(false);

    setToastMessage(result ? "Workout aggiunto con successo!" : "Errore durante l'aggiunta del workout");
  };

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-3 display-5">Esplora i nostri workout</h2>
      <p className="text-center text-muted fs-5 mb-5">
        Aggiungi i workout che preferisci alla tua scheda personalizzata. Dai sollevamenti pesi ai circuiti cardio!
      </p>

      <Row className="g-4">
        {workouts.map((w) => (
          <Col key={w.workoutId} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-sm border-0 card-hover text-center flex-column">
              <div className="card-img-wrapper">
                <Card.Img
                  variant="top"
                  src={`../src/images/allImages/${w.nome.toLowerCase()}.png`}
                  alt={w.nome}
                  style={{ height: "180px", objectFit: "contain", backgroundColor: "#f8f9fa" }}
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold mb-2">{w.nome.toUpperCase()}</Card.Title>

                <div className="mb-3 d-flex justify-content-center gap-2 flex-wrap">
                  <Badge bg="primary"><FaBolt /> {w.categorie.descrizione}</Badge>
                  <Badge bg="secondary"><FaUsers /> {w.gruppoMuscolare.gruppoMuscolare}</Badge>
                  <Badge bg="danger"><FaDumbbell /> {w.difficoltà}/5</Badge>
                </div>

                <Button
                  variant="white"
                  onClick={() => handleSchede(w.workoutId)}
                  className="mt-auto fw-bold"
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
          {schede.length === 0 ? (
            <p className="text-center text-muted">Non ci sono schede disponibili.</p>
          ) : (
            <Stack gap={2}>
              {schede.map((s) => (
                <Button
                  key={s.workoutLogId}
                  variant="outline-dark"
                  className="text-truncate"
                  onClick={() => handleAddToCard(s.workoutLogId)}
                >
                  {s.nome}
                </Button>
              ))}
            </Stack>
          )}
        </Modal.Body>
      </Modal>

      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage("")}
          delay={3000}
        />
      )}
      <ScrollToTop />
    </Container>
  );
}
