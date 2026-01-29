import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Row,
  Button,
  Modal,
  Container,
  Badge,
} from "react-bootstrap";
import {
  FaDumbbell,
  FaRedo,
  FaClock,
  FaWeightHanging,
  FaTimes,
} from "react-icons/fa";
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

  // Filtri
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

  const categorie = [
    ...new Set(
      dettagliSchede.map((item) => item.workouts.categorie.descrizione)
    ),
  ];
  const gruppi = [
    ...new Set(
      dettagliSchede.map(
        (item) => item.workouts.gruppoMuscolare.gruppoMuscolare
      )
    ),
  ];
  const difficolta = [
    ...new Set(
      dettagliSchede.map((item) => item.workouts.difficoltà.toString())
    ),
  ];

  const difficoltaColor = (diff) => {
    if (+diff >= 4) return "danger";
    if (+diff === 3) return "warning";
    return "success";
  };

  return (
    <div className="d-flex flex-column min-vh-100">
    <Container className="my-4">
      <h3 className="text-center mb-4 fw-bold">
        Dettagli Scheda di Allenamento
      </h3>

      {/* Filtri */}
      {/* Barra filtri orizzontale */}
      <div className="filter-bar mb-4 py-2 px-3 rounded-4 shadow-sm d-flex align-items-center overflow-auto">
        {/* Categoria */}
        <div className="d-flex align-items-center me-5 flex-shrink-0">
          <span className="me-2 fw-bold"> Categoria:</span>
          <div className="d-flex gap-2">
            <Badge
              bg={filterCategoria === "" ? "danger" : "light"}
              text={filterCategoria === "" ? "light" : "dark"}
              pill
              className="filter-badge"
              onClick={() => setFilterCategoria("")}
            >
              Tutte
            </Badge>
            {categorie.map((cat) => (
              <Badge
                key={cat}
                bg={filterCategoria === cat ? "danger" : "light"}
                text={filterCategoria === cat ? "light" : "dark"}
                pill
                className="filter-badge"
                onClick={() => setFilterCategoria(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>

        {/* Gruppo muscolare */}
        <div className="d-flex align-items-center me-5 flex-shrink-0">
          <span className="me-2 fw-bold">Gruppo:</span>
          <div className="d-flex gap-2">
            <Badge
              bg={filterGruppo === "" ? "secondary" : "light"}
              text={filterGruppo === "" ? "light" : "dark"}
              pill
              className="filter-badge"
              onClick={() => setFilterGruppo("")}
            >
              Tutti
            </Badge>
            {gruppi.map((g) => (
              <Badge
                key={g}
                bg={filterGruppo === g ? "secondary" : "light"}
                text={filterGruppo === g ? "light" : "dark"}
                pill
                className="filter-badge"
                onClick={() => setFilterGruppo(g)}
              >
                {g}
              </Badge>
            ))}
          </div>
        </div>

        {/* Difficoltà */}
        <div className="d-flex align-items-center flex-shrink-0">
          <span className="me-2 fw-bold">Difficoltà:</span>
          <div className="d-flex gap-2">
            <Badge
              bg={filterDifficolta === "" ? "warning" : "light"}
              text={filterDifficolta === "" ? "dark" : "dark"}
              pill
              className="filter-badge"
              onClick={() => setFilterDifficolta("")}
            >
              Tutte
            </Badge>
            {difficolta.map((d) => (
              <Badge
                key={d}
                bg={filterDifficolta === d ? difficoltaColor(d) : "light"}
                text={filterDifficolta === d ? "light" : "dark"}
                pill
                className="filter-badge"
                onClick={() => setFilterDifficolta(d)}
              >
                {d}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Griglia Card */}
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {filteredSchede.map((value) => (
          <Col key={value.workoutLogDetailId}>
            <Card className="h-100 shadow-sm border-0 rounded-4 overflow-hidden card-hover position-relative">
              {/* X in alto a destra */}
              <Button
                variant="gray"
                size="sm"
                className="position-absolute top-0 end-0 m-2 p-1 rounded-circle d-flex align-items-center justify-content-center"
                onClick={() => handleShowModal(value.workoutLogDetailId)}
              >
                <FaTimes />
              </Button>

              <Card.Img
                variant="top"
                src={`../src/images/allImages/${value.workouts.nome.toLowerCase()}.png`}
                alt={value.workouts.nome}
                style={{ height: "180px", objectFit: "contain" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center fw-bold">
                  {value.workouts.nome}
                </Card.Title>
                <div className="mb-2 text-center">
                  <Badge bg="primary" className="me-1">
                    {value.workouts.categorie.descrizione}
                  </Badge>
                  <Badge bg="secondary" className="me-1">
                    {value.workouts.gruppoMuscolare.gruppoMuscolare}
                  </Badge>
                  <Badge bg={difficoltaColor(value.workouts.difficoltà)}>
                    {value.workouts.difficoltà}/5
                  </Badge>
                </div>
                <div className="mb-2">
                  <p className="mb-1">
                    <FaDumbbell /> Sets: {value.sets}, Ripetizioni:{" "}
                    {value.ripetizioni}
                  </p>
                  <p className="mb-1">
                    <FaWeightHanging /> Peso: {value.peso}kg, <FaRedo />{" "}
                    Recover: {value.recover}'
                  </p>
                  <p className="mb-1">
                    <FaClock /> Tempo: {value.tempo}''
                  </p>
                  <p className="mb-1">Note: {value.note || "-"}</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-center mt-4">
        <Button variant="danger" onClick={handlePrint}>
          🖨️ Stampa la scheda
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
          <Button
            variant="danger"
            onClick={() => handleEliminaClick(selectedId)}
          >
            Elimina
          </Button>
        </Modal.Footer>
      </Modal>

      {/* CSS extra */}
      <style>
        {`
          .card-hover {
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .card-hover:hover {
            transform: scale(1.03);
            box-shadow: 0 8px 20px rgba(0,0,0,0.25);
          }
        `}
      </style>
    </Container>
    </div>
  );
}
