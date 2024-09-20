// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'; // Assurez-vous d'importer le fichier CSS pour le style

const Layout = ({ children }) => {
  return (
    <div className="layout-container bg-brown-700 min-h-screen"> {/* Fond brun foncé */}
      <header className="p-4"> {/* En-tête sans fond ici */}
        <nav>
          <ul className="flex space-x-8 justify-center">
            <li>
              <Link to="/" className="text-white hover:text-gray-200">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white hover:text-gray-200">
                Services
              </Link>
            </li>
            <li>
              <Link to="/habitats" className="text-white hover:text-gray-200">
                Habitats
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-200">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/connexion" className="text-white hover:text-gray-200">
                Connexion
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
