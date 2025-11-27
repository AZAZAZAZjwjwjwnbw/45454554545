import React, { useState } from 'react';
export default function App ()  {

  const [pokemon, setPokemon] = useState(null);

  const [name, setName] = useState('pikachu');

  const getPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.log('Ошибка:', error);
    }
  };

  return (
    <div>
      <h1>What is Pokemon?</h1>
      
      <div>
        <input 
          value={name}
          onChange={(e) => setName(e.target.value.toLowerCase())}
          placeholder="Введите имя покемона"
        />
        <button onClick={getPokemon}>Найти</button>
      </div>

      {pokemon && (
        <div style={{ marginTop: '20px' }}>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Вес: {pokemon.weight}</p>
          <p>Рост: {pokemon.height}</p>
        </div>
      )}
    </div>
  );
}

