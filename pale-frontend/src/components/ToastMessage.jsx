import React, { useEffect } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export default function ToastMessage({ message, variant = "success", onClose, delay = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, delay);
    return () => clearTimeout(timer);
  }, [message, delay, onClose]);

  return (
    <ToastContainer position="bottom-end" className="p-3">
      <Toast bg={variant} onClose={onClose} show={!!message} delay={delay} autohide>
        <Toast.Body className="text-white">{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
