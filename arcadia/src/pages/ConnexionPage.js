import React, { useState } from 'react';
import Layout from '../components/Layout';

const ConnexionPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Connexion:', { email, password });
  };

  return (
    <Layout>
      <div className="bg-green-600 min-h-screen flex flex-col">
        <div className="container mx-auto px-4 py-10 flex-grow">
          <div className="bg-[#CEAC7E] p-6 rounded-lg shadow-lg"> {/* Encadré brun */}
            <h1 className="text-3xl font-bold text-center text-white">Connexion</h1>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-white font-medium">Email :</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-500"
                  placeholder="Votre email"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-medium">Mot de passe :</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-500"
                  placeholder="Votre mot de passe"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold py-2 rounded-lg hover:bg-green-500 transition duration-300"
              >
                Se Connecter
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ConnexionPage;

