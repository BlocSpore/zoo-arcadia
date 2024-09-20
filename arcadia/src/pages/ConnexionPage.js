// src/pages/ConnexionPage.js
import React from 'react';
import Header from '../components/Header';

const ConnexionPage = () => {
  return (
    <div>
      <Header />
      <h1>Connexion</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Mot de passe:
          <input type="password" name="password" />
        </label>
        <button type="submit">Se Connecter</button>
      </form>
    </div>
  );
}

export default ConnexionPage;

