import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CardList from './pages/CardList';
import AddCard from './components/AddCard';
import './App.css';

const App = () => {
  const [screen, setScreen] = useState('home');
  const [cards, setCards] = useState([]);

  const handleAddCard = (newCard) => {
    setCards([newCard, ...cards]);
  };

  return (
    <div className="App">
      <Navbar setScreen={setScreen} />

      <div className="screen">
        {screen === 'home' && <Home />}
        {screen === 'cards' && <CardList cards={cards} />}
        {screen === 'add' && <AddCard onAdd={handleAddCard} />}
      </div>
    </div>
  );
};

export default App;

