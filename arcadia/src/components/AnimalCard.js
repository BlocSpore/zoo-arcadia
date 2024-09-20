// src/components/AnimalCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const AnimalCard = ({ animal }) => {
  return (
    <div>
      <h3>{animal.name}</h3>
      <img src={animal.image} alt={animal.name} />
      <p>{animal.species}</p>
      <Link to={`/animal/${animal.id}`}>Voir les détails</Link>
    </div>
  );
}

export default AnimalCard;
