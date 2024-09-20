// src/pages/AnimalDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const AnimalDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <h1>Détails de l'Animal</h1>
      <p>Affichage des détails de l'animal avec ID : {id}</p>
      {/* Ajouter ici la logique pour afficher les détails de l'animal */}
    </div>
  );
}

export default AnimalDetail;

