// src/pages/AnimalsPage.js
import React from 'react';
import Layout from '../components/Layout';
import animals from '../data/animals'; // Importez les données

const AnimalsPage = () => {
  return (
    <Layout>
      <div className="bg-[#CEAC7E] p-6 rounded-lg shadow-lg min-h-screen">
        <h1 className="text-4xl font-bold text-center text-white mb-6">Nos Animaux</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {animals.map((animal, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-[#8B4513]">{animal.name}</h2>
              <p><strong>Race:</strong> {animal.species}</p>
              <p><strong>Habitat:</strong> {animal.habitat}</p>
              <p><strong>État:</strong> {animal.status}</p>
              <p><strong>Nourriture:</strong> {animal.food}</p>
              <p><strong>Grammage:</strong> {animal.weight}</p>
              <p><strong>Date de passage:</strong> {animal.lastCheckup}</p>
              <p><strong>Commentaire:</strong> {animal.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AnimalsPage;
