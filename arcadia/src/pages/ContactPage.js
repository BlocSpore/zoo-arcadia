import React, { useState } from 'react';
import Layout from '../components/Layout';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message envoyé :', { name, email, message });
  };

  return (
    <Layout>
      <div className="bg-[#CEAC7E] p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white">Contactez-nous</h1>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="block text-white font-medium">Nom :</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label className="block text-white font-medium">Email :</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Votre email"
            />
          </div>
          <div>
            <label className="block text-white font-medium">Message :</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Votre message"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-2 rounded-lg hover:bg-green-500 transition duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default ContactPage;
