import React from 'react';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <Layout>
      <div className="bg-green-600 min-h-screen flex flex-col">
        <div className="container mx-auto px-4 py-10 flex-grow">
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            Découvrez le Zoo Arcadia !
          </h1>
          <p className="text-lg text-center text-white mb-8">
            Installé en Bretagne, à deux pas de la forêt de Brocéliande, notre zoo accueille les visiteurs depuis 1960 dans un cadre naturel. Plus qu'un simple parc animalier, le Zoo Arcadia est un véritable sanctuaire dédié à la préservation de la faune et à l'éducation environnementale.
          </p>
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Explorez nos biomes :
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#CEAC7E] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">La Savane</h3>
              <img 
                src="/image/savane.jpeg" 
                alt="Savane avec des lions et des girafes" 
                className="w-full h-48 object-cover rounded-lg mb-2 transform hover:scale-105 transition-transform duration-300" 
              />
              <p>Admirez les lions, girafes et éléphants dans un décor inspiré des vastes plaines d’Afrique.</p>
            </div>
            <div className="bg-[#788F47] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">La Jungle</h3>
              <img 
                src="/image/junglea.jpeg" 
                alt="Jungle tropicale avec des singes et oiseaux colorés" 
                className="w-full h-48 object-cover rounded-lg mb-2 transform hover:scale-105 transition-transform duration-300" 
              />
              <p>Plongez dans un monde tropical où nos singes, reptiles et oiseaux colorés vous éblouiront, tout en ajoutant un soupçon de l’esprit de Breizh.</p>
            </div>
            <div className="bg-[#C4DA6B] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">Les Marais</h3>
              <img 
                src="/image/maraise.jpeg" 
                alt="Marais avec alligators, flamands roses et castors" 
                className="w-full h-48 object-cover rounded-lg mb-2 transform hover:scale-105 transition-transform duration-300" 
              />
              <p>Explorez nos marécages mystérieux, où alligators, flamands roses et castors se mêlent à une ambiance qui rappelle les paysages humides de notre belle Bretagne.</p>
            </div>
          </div>
        </div>
        <img 
          src="/image/animauxa.avif" 
          alt="Bienvenue au Zoo Arcadia" 
          className="w-full h-auto object-cover rounded-lg mb-0" 
        />
      </div>
    </Layout>
  );
}

export default HomePage;
