import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import InfoCard from "./components/InfoCard";
import "./App.css";
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css";

function App() {
  const [showInfoCard, setShowInfoCard] = useState(false);

  const toggleInfoCard = () => {
    setShowInfoCard(!showInfoCard);
  };

  return (
    <div>
      <Navbar toggleInfoCard={toggleInfoCard} />
      <main>
        <Carousel />
      </main>
      {showInfoCard && <InfoCard toggleInfoCard={toggleInfoCard} />}
    </div>
  );
}

export default App;
