import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const HabitatsPage = () => {
  const [selectedHabitat, setSelectedHabitat] = useState(null);

  const habitats = {
    marais: {
      name: 'Marais',
      description: 'Un habitat humide où vivent diverses espèces aquatiques.',
      animals: ['Crocodile', 'Flammand Rose', 'Castor'],
      image: '/images/marais.jpg',
    },
    jungle: {
      name: 'Jungle',
      description: 'Un habitat dense et luxuriant, rempli de vie sauvage.',
      animals: ['Toucans', 'Orangs-outans', 'Jaguars'],
      image: '/images/jungle.jpg',
    },
    savane: {
      name: 'Savane',
      description: 'Un habitat ouvert où se trouvent de nombreux herbivores.',
      animals: ['Lion', 'Eléphant', 'Girafe'],
      image: '/images/savane.jpg',
    },
  };

  const handleHabitatClick = (habitat) => {
    setSelectedHabitat(habitats[habitat]);
  };

  return (
    <Layout>
      <div className="bg-[#CEAC7E] p-6 rounded-lg shadow-lg min-h-screen">
        <h1 className="text-4xl font-bold text-center text-white mb-6">Nos Habitats</h1>
        {!selectedHabitat ? (
          <div>
            <p className="text-center text-lg mb-8 text-white">
              Découvrez nos différents habitats : marais, jungle, savane.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.keys(habitats).map((key) => (
                <div
                  key={key}
                  className="text-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => handleHabitatClick(key)}
                >
                  <Link to="#">
                    <img
                      src={habitats[key].image}
                      alt={habitats[key].name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h2 className="text-xl font-bold mb-2 text-[#8B4513]">{habitats[key].name}</h2>
                  </Link>
                  <p className="text-gray-800">{habitats[key].description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-6">
            <h2 className="text-3xl font-bold text-white mb-4">Détails de l'Habitat : {selectedHabitat.name}</h2>
            <h3 className="text-2xl font-semibold mb-4 text-white">Animaux dans cet habitat :</h3>
            <ul className="list-disc list-inside mb-6 text-white">
              {selectedHabitat.animals.map((animal, index) => (
                <li key={index} className="text-lg mb-2">
                  <Link to={`/animal/${animal.toLowerCase()}`} className="text-[#8B4513] hover:underline">
                    {animal}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className="bg-[#8B4513] text-white font-bold py-2 px-4 rounded-lg hover:bg-green-500 transition duration-300"
              onClick={() => setSelectedHabitat(null)}
            >
              Retour
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default HabitatsPage;
