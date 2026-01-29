import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./Footer.css"
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
    <footer className="footer bg-dark text-white pt-5 pb-3 position-relative">
      <Container className="text-center">
        {/* Scroll-to-top button */}
        {isVisible && (
          <Button
            variant="danger"
            onClick={scrollToTop}
            className="scroll-top-btn shadow-lg"
          >
            ↑
          </Button>
        )}

        <h4 className="text-danger fw-bold mb-2">IronGym</h4>

        <p className="mb-3 fs-6 text-light">
          Ti alleni? Vuoi rimanere in forma? Scopri la piattaforma cloud e app
          per i tuoi allenamenti personalizzati.
        </p>

        <small className="text-secondary">
          © {new Date().getFullYear()} IronGym. Tutti i diritti riservati.
        </small>
      </Container>
    </footer>
  );
}
