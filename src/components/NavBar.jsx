import React, { useState } from 'react';
import './Navbar.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa Font Awesome

const Navbar = ({ setScreen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    setScreen(button);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
          <button onClick={() => handleButtonClick('home')}className={selectedButton==='home'? 'selected' : ''}>Inicio</button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleButtonClick('cards')}className={selectedButton==='cards'? 'selected' : ''}>Lista de Pokémon</button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleButtonClick('add')}className={selectedButton==='add'? 'selected' : ''}>Agregar Pokémon</button>
          </li>
        </ul>
        <img src="/src/images/Pokemon-Logo.png" alt="Logo" className="logo" /> 
      </div>
    </nav>
  );
};

export default Navbar;
