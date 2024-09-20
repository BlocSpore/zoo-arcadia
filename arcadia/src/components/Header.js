import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/habitats">Habitats</Link></li> {/* Corrigé ici */}
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/connexion">Connexion</Link></li>
        </ul>
      </nav>
      {/* Optionnel: Ajouter un bouton de retour au menu */}
      <div className="header-menu-return">
        <Link to="/">Retour au Menu</Link>
      </div>
    </header>
  );
}

export default Header;
