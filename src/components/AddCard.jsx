import React, { useState } from 'react';
import './AddCard.css';

const AddCard = ({ onAdd }) => {
  const [pokemonName, setPokemonName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleAdd = () => {
    const pokemonNameValue = document.getElementById('pokemonName').value;
    const imageUrlValue = document.getElementById('imageUrl').value;
    const heightValue = document.getElementById('height').value;
    const weightValue = document.getElementById('weight').value;

    if (pokemonNameValue === '' || imageUrlValue === '' || heightValue === '' || weightValue === '') {
      alert('Por favor, complete todos los campos');
      return;
    }

    const newPokemon = {
      name: pokemonNameValue,
      sprites: { front_default: imageUrlValue },
      height: heightValue,
      weight: weightValue,
    };

    onAdd(newPokemon);
    setPokemonName('');
    setImageUrl('');
    setHeight('');
    setWeight('');
  };

  return (
    <div className="add-card-container">
      <fieldset className="add-card">
        <legend>Agregar Nuevo Pokémon</legend>
        <input
          type="text"
          id="pokemonName"
          placeholder="Nombre del Pokémon"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <input
          type="text"
          id="imageUrl"
          placeholder="URL de la imagen"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <input
          type="number"
          id="height"
          placeholder="Altura"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          id="weight"
          placeholder="Peso"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button onClick={handleAdd}>Agregar Pokémon</button>
      </fieldset>
    </div>
  );
};

export default AddCard;
