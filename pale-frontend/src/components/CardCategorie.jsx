import React from "react";

import { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CardCategorie() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/workoutCategory/getAll")
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      });
  });

  const handleDettagliClick = (id) => {
    fetch("http://localhost:8080/api/workout/category/" + id)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  return (
    <Row className=" justify-content-center">
      <Col
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {categories.map((value, categoryId) => {
          return (
            <Card
              className="mx-auto justify-content-center"
              style={{ width: "18rem" }}
              key={categoryId}
            >
              <Link
                className="mt-auto"
                style={{ textDecoration: "none", color: "inherit" }}
                to={`/dettaglicategoria/?categoryId=${value.categoryId}`}
              >
                <Button
                  variant="outline-light"
                  onClick={() => handleDettagliClick(value.categoryId)}
                >
                  <Card.Img
                    variant="top"
                    src={
                      "../src/images/allImages/" +
                      value.descrizione.toLowerCase() +
                      ".png"
                    }
                  />
                </Button>
              </Link>
              <Card.Body>
                <Card.Title className="text-center text-danger">
                  Esercizi {value.descrizione}
                </Card.Title>
              </Card.Body>
            </Card>
          );
        })}
      </Col>
    </Row>
  );
}
