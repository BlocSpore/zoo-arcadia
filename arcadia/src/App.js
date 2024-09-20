// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import HabitatsPage from './pages/HabitatsPage';
import ContactPage from './pages/ContactPage';
import ConnexionPage from './pages/ConnexionPage';
import AnimalsPage from './pages/AnimalsPage'; // Importer la page des animaux

const App = () => {
  return (
    <Router>
      <Header /> {/* Ajout du Header ici */}
      <main className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/habitats" element={<HabitatsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/connexion" element={<ConnexionPage />} />
          <Route path="/animaux" element={<AnimalsPage />} /> {/* Route pour les animaux */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
