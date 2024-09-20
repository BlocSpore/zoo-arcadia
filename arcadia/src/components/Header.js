import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-brown-700 p-4"> {/* Couleur de fond brun foncé */}
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
  );
}

export default Header;
