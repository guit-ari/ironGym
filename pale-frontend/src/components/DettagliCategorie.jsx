import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Modal, Container, Stack, Badge } from "react-bootstrap";
import { FaDumbbell, FaStopwatch, FaStar } from "react-icons/fa";
import ScrollToTop from "./ScrollToTop";

export default function DettagliCategorie() {
  const [dettagliCategorie, setDettagliCategorie] = useState([]);
  const [schede, setSchede] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const categoryId = queryParams.get("categoryId");

    fetch(`http://localhost:8080/api/workout/category/${categoryId}`)
      .then((resp) => resp.json())
      .then((data) => setDettagliCategorie(data))
      .catch((err) => console.error("Errore nel recupero dei workout:", err));
  }, []);

  // Apri modale schede
  const handleSchede = async (workoutId) => {
    setSelectedWorkoutId(workoutId);
    try {
      const resp = await fetch("http://localhost:8080/api/workoutLogs/getAll");
      const data = await resp.json();
      setSchede(data);
      setShowModal(true);
    } catch (err) {
      console.error("Errore nel recupero delle schede:", err);
    }
  };

  // Aggiungi workout alla scheda
  const handleAddToCard = async (logId, workoutId) => {
    try {
      const resp = await fetch(
        `http://localhost:8080/api/workoutLogDetails/${logId}/workouts/${workoutId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ logId, workoutId }),
        }
      );
      if (resp.ok) {
        setToastMessage("✅ Workout aggiunto con successo!");
        setShowModal(false);
      } else {
        setToastMessage("❌ Errore durante l'aggiunta del workout");
      }
    } catch (err) {
      setToastMessage("❌ Errore durante l'aggiunta del workout");
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-3 display-5">
        Esplora i nostri workout per categoria
      </h2>
      <p className="text-center text-muted fs-5 mb-5">
        Scegli tra centinaia di workout e crea la tua routine di allenamento ideale
        in pochi clic.
      </p>

      <Row className="g-4 justify-content-center">
        {dettagliCategorie.map((workout) => (
          <Col key={workout.workoutId} xs={12} sm={6} md={4} lg={3}>
            <Card className="shadow-sm border-0 card-hover text-center h-100 position-relative">
              {/* X per eliminare / aggiungere */}
              <Button
                variant="outline-secondary"
                size="sm"
                className="position-absolute top-2 end-2 "
                style={{ zIndex: 2 }}
                onClick={() => handleSchede(workout.workoutId)}
              >
                +
              </Button>

              <div className="card-img-wrapper">
                <Card.Img
                  variant="top"
                  src={`../src/images/allImages/${workout.nome.toLowerCase()}.png`}
                  alt={workout.nome}
                  className="card-img-top"
                  style={{ objectFit: "contain", height: "180px" }}
                />
              </div>

              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold mb-2">{workout.nome.toUpperCase()}</Card.Title>

                {/* Badge con categoria */}
                <div className="mb-2 text-center">
                  <Badge bg="primary" className="me-1">
                    {workout.categorie.descrizione}
                  </Badge>
                  <Badge bg="secondary" className="me-1">
                    {workout.gruppoMuscolare.gruppoMuscolare}
                  </Badge>
                  <Badge bg="warning" text="dark">
                    <FaStar className="me-1" /> {workout.difficoltà}/5
                  </Badge>
                </div>
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
                  onClick={() => handleAddToCard(s.workoutLogId, selectedWorkoutId)}
                >
                  {s.nome}
                </Button>
              ))}
            </Stack>
          )}
        </Modal.Body>
      </Modal>

      {/* Toast */}
      {toastMessage && (
        <div
          className="toast show align-items-center text-white bg-success border-0"
          role="alert"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            minWidth: "250px",
            zIndex: 9999,
          }}
        >
          <div className="d-flex">
            <div className="toast-body">{toastMessage}</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              aria-label="Close"
              onClick={() => setToastMessage("")}
            ></button>
          </div>
        </div>
      )}

      <ScrollToTop />
    </Container>
  );
}
