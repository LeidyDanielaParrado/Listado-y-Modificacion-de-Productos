import React, { useState } from 'react';
import './AddCard.css';

const AddCard = ({ onAdd }) => {
  const [pokemonName, setPokemonName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleAdd = () => {
    const newPokemon = {
      name: pokemonName,
      sprites: { front_default: imageUrl },
      height: height,
      weight: weight
    };

    onAdd(newPokemon);  // Agrega el nuevo Pokémon a la lista
    setPokemonName('');
    setImageUrl('');
    setHeight('');
    setWeight('');
  };

  return (
    <div className="add-card">
      <input
        type="text"
        placeholder="Nombre del Pokémon"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL de la imagen"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <input
        type="number"
        placeholder="Altura"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Peso"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button onClick={handleAdd}>Agregar Pokémon</button>
    </div>
  );
};

export default AddCard;
