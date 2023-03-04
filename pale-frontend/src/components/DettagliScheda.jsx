import React from "react";

import { Table, Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function DettagliScheda() {
  const [dettagliSchede, setDettagliSchede] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const workoutLogId = queryParams.get("workoutLogId");

    fetch(
      "http://localhost:8080/api/workoutLogDetails/workout-logs/" +
        workoutLogId +
        "/details"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setDettagliSchede(data);
      });
  });

  const handleEliminaClick = (id) => {
    // Invio della richiesta al backend per eliminare il workout
    console.log(id);
    fetch("http://localhost:8080/api/workoutLogDetails/delete/" + id, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          handleClose(); // Chiamata alla funzione onSchedaEliminata per notificare il componente padre
          return response.json();
        } else {
          throw new Error(
            "Errore durante l'eliminazione del workout di allenamento"
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th></th>
            <th>Esercizio</th>
            <th>Categoria</th>
            <th>Gruppo muscolare</th>
            <th>Difficoltà</th>
            <th>Equipaggiamento</th>
            <th>Sets</th>
            <th>Ripetizioni</th>
            <th>Peso</th>
            <th>Recover</th>
            <th>Tempo</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {dettagliSchede.map((value, id) => (
            <tr key={id}>
              <td>
                <img
                  src={
                    "../src/images/allImages/" + value.workouts.nome + ".png"
                  }
                  width="100"
                />
              </td>
              <td>{value.workouts.nome}</td>
              <td>{value.workouts.categorie.descrizione}</td>
              <td>{value.workouts.gruppoMuscolare.gruppoMuscolare}</td>
              <td>{value.workouts.difficoltà}/5</td>
              <td>{value.workouts.equipments.nomeEquipaggiamento}</td>
              <td>{value.sets}</td>
              <td>{value.ripetizioni}</td>
              <td>{value.peso}kg</td>
              <td>{value.recover}'</td>
              <td>{value.tempo}''</td>
              <td>{value.note}</td>
              <td>
                {" "}
                <Button variant="light" onClick={handleShow}>
                  Elimina
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Conferma eliminazione</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Sei sicuro di voler eliminare questo elemento?
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Annulla
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() =>
                        handleEliminaClick(value.workoutLogDetailId)
                      }
                    >
                      Elimina
                    </Button>
                  </Modal.Footer>
                </Modal>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center">
        <Button variant="danger" onClick={handlePrint}>
          Stampa la scheda
        </Button>
      </div>
    </>
  );
}
