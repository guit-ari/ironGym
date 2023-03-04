import React from "react";
import { Row, Col, Card, Button,Modal, Container} from "react-bootstrap";
import { useState, useEffect } from "react";
export default function DettagliCategorie() {
  const [dettagliCategorie, setDettagliCategorie] = useState([]);

  const [schede, setSchede] = useState([]);
  const [showModal, setShowModal] = useState(false);


  const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const categoryId = queryParams.get("categoryId");

    fetch("http://localhost:8080/api/workout/category/" + categoryId)
      .then((resp) => resp.json())
      .then((data) => {
        setDettagliCategorie(data);
      });
  });0
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
      <Container className="text-center my-4" style={{ fontSize: 25 }}>
      Con la nostra piattaforma online, puoi selezionare facilmente i workout in base alla categoria e aggiungerli alla tua scheda di allenamento personalizzata. 
      Scegli tra centinaia di workout e crea la tua routine di allenamento ideale in pochi clic.
      </Container>

    <Row className=" justify-content-center">
      <Col
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {dettagliCategorie.map((value, id) => {
          return (
            <Card className="mx-auto mt-4" style={{ width: "18rem" }} key={id}>
              <Card.Img
                variant="top"
                src={
                  "../src/images/allImages/" + value.nome.toLowerCase() + ".png"
                }
              />
              <Card.Body>
                <Card.Title className="text-center text-dark">
                  {value.nome.toUpperCase()}
                </Card.Title>
                <div className="d-flex justify-content-center align-items-center">
      <Button variant="outline-danger"
                  className="mt-auto "
                  onClick={() => handleSchede(value.workoutId)}
                >  Aggiungi alla scheda</Button>
    </div>
               

              
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
               
              </Card.Body>
            </Card>
          );
        })}
      </Col>
    </Row>
    </>
  );
}
