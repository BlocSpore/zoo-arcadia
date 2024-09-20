import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const AnimalDetail = () => {
  const { animalName } = useParams();

  // Exemple de données d'animaux
  const animals = {
    roi: {
      species: 'Lion d\'Afrique',
      habitat: 'Savane',
      status: 'Très bon',
      food: 'Steak de cheval',
      weight: '8 kg',
      lastVisit: '09/08/2024',
      comment: 'Arrêter les cacahuètes',
    },
    reine: {
      species: 'Lion d\'Afrique',
      habitat: 'Savane',
      status: 'Bon',
      food: 'Steak de zèbre',
      weight: '7 kg',
      lastVisit: '09/08/2024',
    },
    gisèle: {
      species: 'Girafe d\'Afrique',
      habitat: 'Savane',
      status: 'Excellent',
      food: 'Feuilles d\'acacia',
      weight: '50 kg',
      lastVisit: '09/08/2024',
    },
    // Ajoutez d'autres animaux ici...
  };

  const animal = animals[animalName.toLowerCase()];

  if (!animal) {
    return <div>Animal non trouvé</div>;
  }

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-3xl font-bold">{animalName.charAt(0).toUpperCase() + animalName.slice(1)}</h1>
        <p>Espèce: {animal.species}</p>
        <p>Habitat: {animal.habitat}</p>
        <p>État: {animal.status}</p>
        <p>Nourriture: {animal.food}</p>
        <p>Grammage: {animal.weight}</p>
        <p>Date de passage: {animal.lastVisit}</p>
        {animal.comment && <p>Commentaire: {animal.comment}</p>}
      </div>
    </Layout>
  );
};

export default AnimalDetail;
