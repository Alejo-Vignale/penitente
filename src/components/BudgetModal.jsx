import React from "react";
import "./BudgetModal.css"; // Importamos el nuevo CSS

const BudgetModal = ({ isOpen, onClose, openContactModal }) => {
  if (!isOpen) return null;

  return (
    <div className="budget-modal">
      <div className="budget-modal-content">
        <h3>Solicita tu Presupuesto</h3>
        <p>
          En nuestro parque ofrecemos{" "}
          <b>
            experiencias inolvidables para instituciones educativas, grupos
            turísticos, reuniones empresariales, casamientos y cumpleaños.
          </b>
          Disfruta de un entorno natural único con todas las comodidades
          necesarias para tu evento.
        </p>
        <p>
          Nuestro <b>servicio de catering</b> destaca por su{" "}
          <b>comida casera y de calidad</b>, elaborada con ingredientes frescos
          y preparados con esmero.
        </p>
        <p>
          Sabemos que cada ocasión es especial y tiene necesidades particulares,
          por eso ofrecemos <b>presupuestos accesibles y personalizados</b>,
          adaptándonos a las preferencias de cada grupo. Además, prestamos
          especial atención a las <b>dietas especiales</b>, asegurándonos de que
          todos los invitados disfruten sin preocupaciones.
        </p>

        <h3 id="contact-link" onClick={openContactModal}>
          📩 Contáctanos y armemos juntos la mejor propuesta para tu evento!
        </h3>

        {/* Botón rojo grande con la clase correcta */}
        <button className="close-budget" onClick={onClose}>
          CERRAR
        </button>
      </div>
    </div>
  );
};

export default BudgetModal;
