import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CardCategorie() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const resp = await fetch(
          "http://localhost:8080/api/workoutCategory/getAll"
        );
        const data = await resp.json();
        setCategories(data);
      } catch (err) {
        console.error("Errore nel recupero delle categorie", err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <Row className="justify-content-center">
      <Col
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {categories.map((value, index) => (
          <Card
            key={index}
            className="shadow-sm mx-auto text-center"
            style={{
              width: "18rem",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Link
              to={`/dettaglicategoria/?categoryId=${value.categoryId}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card.Img
                variant="top"
                src={`../src/images/allImages/${value.descrizione.toLowerCase()}.png`}
                style={{ height: "180px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title className="text-secondary fw-bold">
                  {value.descrizione}
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
        ))}
      </Col>
    </Row>
  );
}
