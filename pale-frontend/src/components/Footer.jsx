import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white mt-5">
      <Container className="text-center py-4">
        {isVisible && (
          <Button
            variant="danger"
            className="mb-3"
            onClick={scrollToTop}
          >
            Torna in cima
          </Button>
        )}

        <h4 className="text-danger fw-bold mb-2">IronGym</h4>
        <p className="mb-2">
          Ti alleni? Vuoi rimanere in forma? Scopri la piattaforma cloud e app
          per i tuoi allenamenti.
        </p>

        <small className="text-secondary">
          © {new Date().getFullYear()} IronGym
        </small>
      </Container>
    </footer>
  );
}
