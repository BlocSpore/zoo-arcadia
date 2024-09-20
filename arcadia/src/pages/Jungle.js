import React from 'react';
import Layout from '../components/Layout';

const Jungle = () => {
  const animals = [
    {
      name: 'Luffy',
      species: 'Orang Outan',
      habitat: 'Jungle',
      status: 'Très bon',
      food: 'Fruit et écorce',
      weight: '4000 grammes',
      lastVisit: '09/08/2024',
      comment: 'Arrêter les cacahuètes',
    },
    {
      name: 'Coconuts',
      species: 'Orang Outan',
      habitat: 'Jungle',
      status: 'Bon',
      food: 'Fruit et écorce',
      weight: '3500 grammes',
      lastVisit: '09/08/2024',
      comment: '',
    },
    {
      name: 'Candy',
      species: 'Toucan',
      habitat: 'Jungle',
      status: 'Excellent',
      food: 'Mix baies fruits graines',
      weight: '150g graines, 70g fruits',
      lastVisit: '16/08/2024',
      comment: '',
    },
    {
      name: 'Tuktuk',
      species: 'Toucan',
      habitat: 'Jungle',
      status: 'Plutôt bon',
      food: 'Mix baies fruits graines',
      weight: '160g graines, 60g fruits',
      lastVisit: '16/08/2024',
      comment: '',
    },
    {
      name: 'Rio',
      species: 'Toucan',
      habitat: 'Jungle',
      status: 'Ok',
      food: 'Mix baies fruits graines',
      weight: '150g graines, 70g fruits',
      lastVisit: '16/08/2024',
      comment: '',
    },
    {
      name: 'Bageera',
      species: 'Jaguar',
      habitat: 'Jungle',
      status: 'Moyen',
      food: 'Lapin et poisson',
      weight: '2 kilos',
      lastVisit: '09/08/2024',
      comment: 'Envisager de lui trouver un partenaire',
    },
  ];

  return (
    <Layout>
      <div className="bg-green-100 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-green-700">Jungle</h1>
        <p className="mt-4 text-center">
          La jungle tropicale est un monde luxuriant, caractérisé par une végétation dense, des arbres imposants et une humidité constante.
        </p>
        <h3 className="mt-6 text-2xl font-semibold text-green-600">Animaux observables :</h3>
        <ul className="mt-2 space-y-2 text-gray-700 text-center">
          {animals.map((animal, index) => (
            <li key={index}>
              <strong>{animal.name}</strong> ({animal.species})
            </li>
          ))}
        </ul>
        <h3 className="mt-6 text-2xl font-semibold text-green-600">Détails des animaux :</h3>
        <div className="mt-4">
          {animals.map((animal, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
              <h4 className="font-bold">{animal.name} ({animal.species})</h4>
              <p>Habitat: {animal.habitat}</p>
              <p>État: {animal.status}</p>
              <p>Nourriture: {animal.food}</p>
              <p>Grammage: {animal.weight}</p>
              <p>Date de passage: {animal.lastVisit}</p>
              {animal.comment && <p>Commentaire: {animal.comment}</p>}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Jungle;
