import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar"; // Import the Navbar component

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery/:category" element={<Gallery />} />
      </Routes>
    </Router>
  </StrictMode>
);
