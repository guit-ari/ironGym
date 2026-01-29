import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) { 
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <Button
        onClick={scrollToTop}
        variant="danger"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.5rem",
          zIndex: 9999,
        }}
      >
        ↑
      </Button>
    )
  );
};

export default ScrollToTop;
