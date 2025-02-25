import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BudgetModal from "./BudgetModal"; // Import the BudgetModal
import "./Navbar.css";

const Navbar = ({ toggleInfoCard }) => {
  const navigate = useNavigate();
  const [isBudgetOpen, setBudgetOpen] = useState(false);

  const goToCarousel = () => {
    navigate("/");
  };

  return (
    <header>
      <nav>
        <img src="/image/logo2.png" alt="Logo" className="navbar-logo" />
        <a href="#home" onClick={goToCarousel} className="back-to-carousel">
          Inicio
        </a>
        <a href="#" onClick={() => setBudgetOpen(true)}>
          Presupuesto 2025
        </a>
        <button id="info-btn" onClick={toggleInfoCard}>
          Contacto!
        </button>
      </nav>

      {/* Budget Modal */}
      <BudgetModal 
        isOpen={isBudgetOpen} 
        onClose={() => setBudgetOpen(false)} 
        openContactModal={() => {
          setBudgetOpen(false);  // Close BudgetModal
          toggleInfoCard();      // Open InfoCard
        }} 
      />
    </header>
  );
};

export default Navbar;
