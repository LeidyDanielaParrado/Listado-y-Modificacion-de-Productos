// components/Navbar.js
import React from 'react';
import './Navbar.css'; // Importa los estilos específicos de Navbar

const Navbar = ({ setScreen }) => {
  return (
    <nav className="navbar">
      <button onClick={() => setScreen('home')}>Inicio</button>
      <button onClick={() => setScreen('cards')}>Lista de Pokémon</button>
      <button onClick={() => setScreen('add')}>Agregar Pokémon</button>
    </nav>
  );
};

export default Navbar;
