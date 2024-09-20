import React from 'react';
import './ServicesPage.css'; // Importer le fichier CSS

function ServicesPage() {
  const services = [
    {
      name: 'Petit Train',
      description: 'Découvrez le zoo à bord de notre petit train.',
      image: '/images/tchoutchou.jpeg', // Chemin vers l'image
    },
    {
      name: 'Restauration',
      description: 'Profitez de nos points de restauration pour une pause gourmande.',
      image: 'restoa.jpeg',
    },
    {
      name: 'Visites Guidées',
      description: 'Profitez de nos visites guidées gratuites pour en apprendre plus sur les animaux.',
      image: '/images/resto.jpeg',
    },
  ];

  return (
    <div className="services-container">
      <h1>Nos Services</h1>
      <ul className="services-list">
        {services.map((service, index) => (
          <li key={index} className="service-item">
            <img src={service.image} alt={service.name} className="service-image" />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesPage;
