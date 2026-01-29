import { useEffect } from "react";

const Toast = ({ message, onClose, delay = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, delay);
    return () => clearTimeout(timer);
  }, [onClose, delay]);

  return (
    <div
      className="toast show align-items-center text-white bg-success border-0"
      role="alert"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        minWidth: "250px",
        zIndex: 9999,
      }}
    >
      <div className="d-flex">
        <div className="toast-body">{message}</div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default Toast;
