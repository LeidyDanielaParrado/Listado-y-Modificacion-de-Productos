import React, { useState } from 'react';
import './Navbar.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa Font Awesome

const Navbar = ({ setScreen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-icon" onClick={toggleMenu}>
          {/* Usa los íconos de Font Awesome */}
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <button onClick={() => setScreen('home')}>Inicio</button>
          </li>
          <li className="nav-item">
            <button onClick={() => setScreen('cards')}>Lista de Pokémon</button>
          </li>
          <li className="nav-item">
            <button onClick={() => setScreen('add')}>Agregar Pokémon</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
