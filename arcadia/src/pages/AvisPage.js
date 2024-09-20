import React from 'react';
import Layout from '../components/Layout'; // Utilisez le Layout pour inclure l'en-tête et le style

const AvisPage = () => {
  return (
    <Layout>
      <div className="bg-green-100 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-green-700">Laisser un Avis</h1>
        <form className="mt-4 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Pseudo:</label>
            <input
              type="text"
              name="pseudo"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Votre pseudo"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Avis:</label>
            <textarea
              name="avis"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Votre avis"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-2 rounded-lg hover:bg-green-500 transition duration-300"
          >
            Soumettre
          </button>
        </form>
        {/* Ajouter ici la logique pour afficher et gérer les avis */}
      </div>
    </Layout>
  );
}

export default AvisPage;
