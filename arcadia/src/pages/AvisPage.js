// src/pages/AvisPage.js
import React from 'react';
import Header from '../components/Header';

const AvisPage = () => {
  return (
    <div>
      <Header />
      <h1>Laisser un Avis</h1>
      <form>
        <label>
          Pseudo:
          <input type="text" name="pseudo" />
        </label>
        <label>
          Avis:
          <textarea name="avis" />
        </label>
        <button type="submit">Soumettre</button>
      </form>
      {/* Ajouter ici la logique pour afficher et gérer les avis */}
    </div>
  );
}

export default AvisPage;
