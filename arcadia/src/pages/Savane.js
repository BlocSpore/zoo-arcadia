import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Savane = () => {
  const animals = [
    { name: 'Roi', species: 'Lion d\'Afrique' },
    { name: 'Reine', species: 'Lion d\'Afrique' },
    { name: 'Gisèle', species: 'Girafe d\'Afrique' },
    { name: 'Melman', species: 'Girafe d\'Afrique' },
    { name: 'Dumbo', species: 'Lion d\'Afrique' },
    { name: 'Jumbo', species: 'Éléphant d\'Afrique' },
  ];

  return (
    <Layout>
      <div className="bg-green-100 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-green-700">Savane</h1>
        <p className="mt-4 text-center">
          Un habitat ouvert où se trouvent de nombreux herbivores.
        </p>
        <h3 className="mt-6 text-2xl font-semibold text-green-600">Animaux :</h3>
        <ul className="mt-2 space-y-2 text-gray-700 text-center">
          {animals.map((animal, index) => (
            <li key={index}>
              <Link to={`/animal/${animal.name.toLowerCase()}`}>
                <strong>{animal.name}</strong> ({animal.species})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Savane;
