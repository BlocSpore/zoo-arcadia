import React from 'react';
import Layout from '../components/Layout';

function ServicesPage() {
  const services = [
    {
      name: 'Petit Train',
      description: 'Découvrez le zoo à bord de notre petit train.',
      image: '/images/tchoutchou.jpeg',
    },
    {
      name: 'Restauration',
      description: 'Profitez de nos points de restauration pour une pause gourmande.',
      image: '/images/resto.jpeg',
    },
    {
      name: 'Visites Guidées',
      description: 'Profitez de nos visites guidées gratuites pour en apprendre plus sur les animaux.',
      image: '/images/resto.jpeg',
    },
  ];

  const trainImage = '/images/traina.jpeg'; // Chemin vers l'image du mini train
  const hotdogImage = '/images/hotodga.jpeg'; // Chemin vers l'image du hot dog

  return (
    <Layout>
      <div className="bg-green-600 min-h-screen flex flex-col">
        {/* En-tête avec style simplifié et cohérent */}
        <h1 className="text-4xl font-bold text-center text-white py-10">
          Nos Services
        </h1>
        
        {/* Cadres avec bordure brun écorce et fond vert */}
        <ul className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <li key={index} className="bg-[#CEAC7E] border-[#8B4513] border-4 p-4 rounded-lg shadow-lg">
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-48 object-cover rounded-lg mb-2" 
              />
              <h2 className="text-xl font-bold mb-2 text-white">{service.name}</h2>
              <p className="text-white">{service.description}</p>
            </li>
          ))}
        </ul>

        {/* Section pour la restauration */}
        <div className="container mx-auto px-4 py-10 bg-[#CEAC7E] border-[#8B4513] border-4 rounded-lg shadow-lg mt-10">
          <h2 className="text-2xl font-bold mb-4 text-white">Hot Dogs Savoureux et Restaurant Gastronomique ! 🌭✨</h2>
          <img 
            src={hotdogImage} 
            alt="Hot Dogs" 
            className="w-full h-48 object-cover rounded-lg mb-4" 
          />
          <p className="text-white">
            Vivez une expérience culinaire inoubliable au Zoo d'Arcadia ! Nous vous proposons deux options délicieuses pour satisfaire toutes vos envies :
          </p>
          <ol className="list-decimal list-inside mb-4 text-white">
            <li><strong>Hot Dogs Gourmands :</strong> Pour un en-cas rapide et savoureux, découvrez notre stand de hot dogs.</li>
            <li><strong>Restaurant Gastronomique :</strong> Pour un déjeuner ou un dîner raffiné, rejoignez-nous dans notre restaurant gastronomique.</li>
          </ol>
          <p className="text-white"><strong>Détails d’ouverture :</strong> 🕒 Hot Dogs/Restaurant : Ouvert de 8 heures à 22 heures</p>
        </div>

        {/* Section pour les guides */}
        <div className="container mx-auto px-4 py-10 bg-[#CEAC7E] border-[#8B4513] border-4 rounded-lg shadow-lg mt-10">
          <h2 className="text-2xl font-bold mb-4 text-white">Rencontrez Nos Guides Gratuits ! 🦒</h2>
          <p className="text-white">
            Notre équipe de guides est à votre disposition gratuitement pour enrichir votre expérience au zoo !
          </p>
          <ul className="list-disc list-inside mb-4 text-white">
            <li><strong>Expertise accessible :</strong> Nos guides connaissent tous les secrets du zoo.</li>
            <li><strong>Visites personnalisées :</strong> Découvrez des anecdotes fascinantes et des informations précieuses.</li>
          </ul>
        </div>

        {/* Section pour le mini train */}
        <div className="container mx-auto px-4 py-10 bg-[#CEAC7E] border-[#8B4513] border-4 rounded-lg shadow-lg mt-10">
          <h2 className="text-2xl font-bold mb-4 text-white">Montez à bord du Mini Train du Zoo ! 🚂</h2>
          <img 
            src={trainImage} 
            alt="Mini Train" 
            className="w-full h-48 object-cover rounded-lg mb-2" 
          />
          <p className="text-white">
            Profitez de notre mini train pour découvrir notre parc tout en vous relaxant.
          </p>
          <ul className="list-disc list-inside mb-4 text-white">
            <li><strong>Visitez en toute tranquillité :</strong> Admirez nos animaux tout en vous laissant guider.</li>
            <li><strong>Accès facile :</strong> Ne manquez aucun enclos ni attraction.</li>
            <li><strong>Confort et amusement :</strong> Une expérience agréable pour toute la famille !</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default ServicesPage;
