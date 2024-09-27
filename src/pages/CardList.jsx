import React, { useEffect, useState } from 'react';
import './CardList.css';

const CardList = ({ cards }) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    if (pokemon.length === 0) {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
        .then(response => response.json())
        .then(data => {
          const promises = data.results.map(p => fetch(p.url).then(res => res.json()));
          Promise.all(promises).then(pokemonData => setPokemon(pokemonData));
        });
    }
  }, [pokemon]);

  return (
    <div className="card-container">
      {[...cards, ...pokemon].map((poke, index) => (
        <div key={index} className="card">
          <img src={poke.sprites.front_default} alt={poke.name} className="card-image" />
          <h3 className='name'>{poke.name}</h3>
          <p><span>Altura: </span>{poke.height}</p>
          <p><span>Peso: </span> {poke.weight}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
