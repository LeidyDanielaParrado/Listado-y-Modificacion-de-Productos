import React, { useEffect, useState } from 'react';
import './CardList.css';

const CardList = ({ cards }) => {
  const [combinedList, setCombinedList] = useState([]);

  useEffect(() => {
    if (combinedList.length === 0) {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
        .then(response => response.json())
        .then(data => {
          const promises = data.results.map(p => fetch(p.url).then(res => res.json()));
          Promise.all(promises).then(pokemonData => {
            setCombinedList([...cards, ...pokemonData]);
          });
        });
    }
  }, [combinedList]);

  const handleDelete = (poke) => {
    const newCombinedList = [...combinedList];
    const index = newCombinedList.findIndex((card) => card.name === poke.name);
    if (index !== -1) {
      newCombinedList.splice(index, 1);
      setCombinedList(newCombinedList);
    }
  };

  return (
    <div className="card-container">
      {combinedList.map((poke, index) => (
        <div key={index} className="card">
          <img src={poke.sprites.front_default} alt={poke.name} className="card-image" />
          <h3 className='name'>{poke.name}</h3>
          <p><span>Altura: </span>{poke.height}</p>
          <p><span>Peso: </span> {poke.weight}</p>
          <button className="delete-button" onClick={() => handleDelete(poke)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default CardList;