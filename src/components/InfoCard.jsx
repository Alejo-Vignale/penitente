import React from "react";
import "./InfoCard.css";

const InfoCard = ({ toggleInfoCard }) => {
  return (
    <div id="info-card" className="info-card">
      <div className="info-card-content">
        <h3>Contactanos!</h3>
        <p>
          <strong>Email:</strong> info@saltodelpenitente.com
        </p>
        <p>
          <strong>Telefono:</strong> +598 99 090 974
        </p>
        <p>
          <strong>Direccion:</strong> Ruta 8 km 134
        </p>
        <button id="close-info" onClick={toggleInfoCard}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
