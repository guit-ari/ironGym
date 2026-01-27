import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button, Modal, Container, Badge, Form } from "react-bootstrap";
import WorkoutService from "../services/workoutService";
export default function DettagliScheda() {
  const [dettagliSchede, setDettagliSchede] = useState([]);
  const [filteredSchede, setFilteredSchede] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [filterCategoria, setFilterCategoria] = useState("");
  const [filterGruppo, setFilterGruppo] = useState("");
  const [filterDifficolta, setFilterDifficolta] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const workoutLogId = queryParams.get("workoutLogId");

    const fetchDettagli = async () => {
      const data = await WorkoutService.getDettagliScheda(workoutLogId);
      setDettagliSchede(data);
      setFilteredSchede(data);
    };

    fetchDettagli();
  }, []);

  // Filtra le schede ogni volta che cambia un filtro
  useEffect(() => {
    let filtered = [...dettagliSchede];
    if (filterCategoria) {
      filtered = filtered.filter(
        (item) => item.workouts.categorie.descrizione === filterCategoria
      );
    }
    if (filterGruppo) {
      filtered = filtered.filter(
        (item) => item.workouts.gruppoMuscolare.gruppoMuscolare === filterGruppo
      );
    }
    if (filterDifficolta) {
      filtered = filtered.filter(
        (item) => item.workouts.difficoltà.toString() === filterDifficolta
      );
    }
    setFilteredSchede(filtered);
  }, [filterCategoria, filterGruppo, filterDifficolta, dettagliSchede]);

  const handleEliminaClick = async (id) => {
    const success = await WorkoutService.deleteWorkout(id);
    if (success) {
      setDettagliSchede((prev) =>
        prev.filter((item) => item.workoutLogDetailId !== id)
      );
      handleClose();
    }
  };

  const handleShowModal = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handlePrint = () => window.print();

  // Genera liste uniche per i filtri
  const categorie = [...new Set(dettagliSchede.map((item) => item.workouts.categorie.descrizione))];
  const gruppi = [...new Set(dettagliSchede.map((item) => item.workouts.gruppoMuscolare.gruppoMuscolare))];
  const difficolta = [...new Set(dettagliSchede.map((item) => item.workouts.difficoltà.toString()))];

  return (
    <Container className="my-4">
      <h3 className="text-center mb-4">Dettagli Scheda di Allenamento</h3>

      {/* Filtri */}
      <Row className="mb-4 g-3 justify-content-center">
        <Col xs={12} sm={4} md={3}>
          <Form.Select
            value={filterCategoria}
            onChange={(e) => setFilterCategoria(e.target.value)}
          >
            <option value="">Tutte le categorie</option>
            {categorie.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </Form.Select>
        </Col>
        <Col xs={12} sm={4} md={3}>
          <Form.Select
            value={filterGruppo}
            onChange={(e) => setFilterGruppo(e.target.value)}
          >
            <option value="">Tutti i gruppi muscolari</option>
            {gruppi.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </Form.Select>
        </Col>
        <Col xs={12} sm={4} md={3}>
          <Form.Select
            value={filterDifficolta}
            onChange={(e) => setFilterDifficolta(e.target.value)}
          >
            <option value="">Tutte le difficoltà</option>
            {difficolta.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      {/* Griglia Card */}
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {filteredSchede.map((value) => (
          <Col key={value.workoutLogDetailId}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={`../src/images/allImages/${value.workouts.nome.toLowerCase()}.png`}
                alt={value.workouts.nome}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center">{value.workouts.nome}</Card.Title>
                <div className="mb-2 text-center">
                  <Badge bg="primary" className="me-1">
                    {value.workouts.categorie.descrizione}
                  </Badge>
                  <Badge bg="secondary">{value.workouts.gruppoMuscolare.gruppoMuscolare}</Badge>
                </div>
                <div className="mb-2">
                  <strong>Difficoltà:</strong> {value.workouts.difficoltà}/5 <br />
                  <strong>Sets:</strong> {value.sets} <strong>Ripetizioni:</strong> {value.ripetizioni} <br />
                  <strong>Peso:</strong> {value.peso}kg <strong>Recover:</strong> {value.recover}' <br />
                  <strong>Tempo:</strong> {value.tempo}'' <br />
                  <strong>Note:</strong> {value.note || "-"}
                </div>
                <Button
                  variant="outline-danger"
                  onClick={() => handleShowModal(value.workoutLogDetailId)}
                  className="mt-auto"
                >
                  Elimina
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-center mt-4">
        <Button variant="danger" onClick={handlePrint}>
          Stampa la scheda
        </Button>
      </div>

      {/* Modal eliminazione */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Conferma eliminazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sei sicuro di voler eliminare questo esercizio?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annulla
          </Button>
          <Button variant="danger" onClick={() => handleEliminaClick(selectedId)}>
            Elimina
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
