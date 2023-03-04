import React from "react";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Mostra il bottone solo quando l'utente scorre la pagina
  useEffect(() => {
    document.addEventListener("scroll", toggleVisibility);
    return () => {
      document.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Mostra o nasconde il bottone a seconda della posizione della pagina
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fa scorrere la pagina verso l'alto
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Card className="text-center mt-5 pb-5 bg-black text-white ">
      <div className="scroll-button">
        {isVisible && (
          <Button className="mt-3" variant="dark" onClick={scrollToTop}>
            Torna in cima
          </Button>
        )}
      </div>
      <Card.Body>
        <Card.Title className="pt-3 text-danger">IronGym</Card.Title>
        <Card.Text>
          Ti alleni? Vuoi rimanere in forma? Scopri la piattaforma CLOUD e APP
          per i tuoi allenamenti!
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
