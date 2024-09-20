// src/pages/Savane.js
import React from 'react';
import Header from '../components/Header';

const Savane = () => {
  return (
    <div>
      <Header />
      <h1>Savane</h1>
      <p>Un habitat ouvert où se trouvent de nombreux herbivores.</p>
      <h3>Animaux :</h3>
      <ul>
        <li>Lion</li>
        <li>Elephant</li>
        <li>Girafe</li>
      </ul>
    </div>
  );
};

export default Savane;
