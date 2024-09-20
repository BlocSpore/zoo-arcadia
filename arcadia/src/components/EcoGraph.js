import React from 'react';
import { Bar } from 'react-chartjs-2'; // Importe le composant Bar de react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'; 

// Enregistre les composants essentiels de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EcoGraph = () => {
  // Données pour le graphique
  const data = {
    labels: ['Marais', 'Jungle', 'Savane'], // Noms des habitats
    datasets: [
      {
        label: 'Impact écologique (en tonnes de CO2)', // Légende
        data: [12, 19, 8], // Données de chaque habitat (modifiables)
        backgroundColor: ['#4caf50', '#ff9800', '#f44336'], // Couleurs des barres
      },
    ],
  };

  // Options de configuration du graphique
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Position de la légende
      },
      title: {
        display: true,
        text: 'Impact écologique par habitat', // Titre du graphique
      },
    },
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <Bar data={data} options={options} /> {/* Rendu du graphique en barres */}
    </div>
  );
};

export default EcoGraph;
