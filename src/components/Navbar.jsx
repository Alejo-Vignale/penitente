import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Navbar.css";

const Navbar = ({ toggleInfoCard }) => {
  const navigate = useNavigate(); // Use useNavigate for navigation

  // Function to go back to the carousel
  const goToCarousel = () => {
    navigate("/"); // Navigate to the home page (carousel)
  };

  return (
    <header>
      <nav>
        {/* Add the logo */}
        <img src="/image/logo2.png" alt="Logo" className="navbar-logo" />
        {/* Updated "Volver a Pagina Principal" link */}
        <a href="#home" onClick={goToCarousel} className="back-to-carousel">
          Inicio
        </a>
        <a href="#contact">Presupesto 2025</a>
        <button id="info-btn" onClick={toggleInfoCard}>
          Contacto!
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
