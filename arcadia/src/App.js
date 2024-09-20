// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import HabitatsPage from './pages/HabitatsPage';
import Marais from './pages/Marais';
import Jungle from './pages/Jungle';
import Savane from './pages/Savane';
import AvisPage from './pages/AvisPage';
import ContactPage from './pages/ContactPage';
import ConnexionPage from './pages/ConnexionPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/habitats" element={<HabitatsPage />} />
        <Route path="/habitats/marais" element={<Marais />} />
        <Route path="/habitats/jungle" element={<Jungle />} />
        <Route path="/habitats/savane" element={<Savane />} />
        <Route path="/avis" element={<AvisPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/connexion" element={<ConnexionPage />} />
      </Routes>
    </Router>
  );
}

export default App;

