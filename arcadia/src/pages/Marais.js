import React from 'react';
import Layout from '../components/Layout';

const Marais = () => {
  return (
    <Layout>
      <div className="bg-green-100 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-green-700">Marais</h1>
        <p className="mt-4 text-center">
          Un habitat humide où vivent diverses espèces aquatiques.
        </p>
        <h3 className="mt-6 text-2xl font-semibold text-green-600">Animaux :</h3>
        <ul className="mt-2 space-y-2 text-gray-700 text-center">
          <li>Crocodile</li>
          <li>Flamant rose</li>
          <li>Castor</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Marais;
