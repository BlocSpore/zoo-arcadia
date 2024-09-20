// src/pages/HabitatsPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const HabitatsPage = () => {
  const [selectedHabitat, setSelectedHabitat] = useState(null);

  const habitats = {
    marais: {
      name: 'Marais',
      description: 'Un habitat humide où vivent diverses espèces aquatiques.',
      animals: ['Crocodile', 'Héron', 'Tortue'],
      image: '/images/marais.jpg',
    },
    jungle: {
      name: 'Jungle',
      description: 'Un habitat dense et luxuriant, rempli de vie sauvage.',
      animals: ['Tigre', 'Singe', 'Panthère'],
      image: '/images/jungle.jpg',
    },
    savane: {
      name: 'Savane',
      description: 'Un habitat ouvert où se trouvent de nombreux herbivores.',
      animals: ['Lion', 'Zèbre', 'Girafe'],
      image: '/images/savane.jpg',
    },
  };

  const handleHabitatClick = (habitat) => {
    setSelectedHabitat(habitats[habitat]);
  };

  return (
    <div>
      <Header />
      <h1>Nos Habitats</h1>
      {!selectedHabitat ? (
        <div>
          <p>Découvrez nos différents habitats : marais, jungle, savane.</p>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {Object.keys(habitats).map((key) => (
              <div key={key} style={{ textAlign: 'center' }} onClick={() => handleHabitatClick(key)}>
                <Link to="#">
                  <img src={habitats[key].image} alt={habitats[key].name} style={{ width: '200px', height: '150px' }} />
                  <h2>{habitats[key].name}</h2>
                </Link>
                <p>{habitats[key].description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>Détails de l'Habitat : {selectedHabitat.name}</h2>
          <h3>Animaux dans cet habitat :</h3>
          <ul>
            {selectedHabitat.animals.map((animal, index) => (
              <li key={index}>
                <Link to={`/animal/${animal.toLowerCase()}`}>{animal}</Link>
              </li>
            ))}
          </ul>
          <button onClick={() => setSelectedHabitat(null)}>Retour</button>
        </div>
      )}
    </div>
  );
};

export default HabitatsPage;
