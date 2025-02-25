import React from "react";
import "./InfoCard.css";

const InfoCard = ({ toggleInfoCard }) => {
  const handleEmailClick = () => {
    const email = "info@saltodelpenitente.com";
    const subject = "Consulta"; 
    const body = "Hola, me gustaría obtener más información sobre...";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div id="info-card" className="info-card">
      <div className="info-card-content">
        <h3>¡Contáctanos!</h3>
        <p>
          <strong>Email:</strong>{" "}
          <a href="#" onClick={handleEmailClick}>
            info@saltodelpenitente.com
          </a>
        </p>
        <p>
          <strong>Teléfono:</strong>{" "}
          <a
            href="https://wa.me/59899090974"
            target="_blank"
            rel="noopener noreferrer"
          >
            +598 99 090 974 (WhatsApp)
          </a>
        </p>
        <p>
          <strong>Dirección:</strong> Ruta 8 km 134
        </p>
        <button id="close-info" onClick={toggleInfoCard}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
