import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import InfoCard from "./components/InfoCard";
import BudgetModal from "./components/BudgetModal"; // Importamos el nuevo modal
import "./App.css";
import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/400-italic.css";

function App() {
  const [showInfoCard, setShowInfoCard] = useState(false);
  const [showBudgetModal, setShowBudgetModal] = useState(false); // Estado para el modal de presupuesto

  const toggleInfoCard = () => {
    setShowInfoCard(!showInfoCard);
  };

  const toggleBudgetModal = () => {
    setShowBudgetModal(!showBudgetModal);
  };

  return (
    <div>
      <Navbar
        toggleInfoCard={toggleInfoCard}
        toggleBudgetModal={toggleBudgetModal}
      />
      <main>
        <Carousel />
      </main>
      {showInfoCard && <InfoCard toggleInfoCard={toggleInfoCard} />}
      {showBudgetModal && (
        <BudgetModal
          isOpen={showBudgetModal}
          onClose={toggleBudgetModal}
          openContactModal={toggleInfoCard}
        />
      )}
    </div>
  );
}

export default App;
