import React, { useState, useEffect } from 'react';
import './PokemonPage.css'; 

export default function PokemonPage() {
    const [pokemon, setPokemon] = useState(null);
    const [name, setName] = useState('pikachu');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [spriteType, setSpriteType] = useState('front_default');
    const [searchHistory, setSearchHistory] = useState([]);
    const [isShiny, setIsShiny] = useState(false);

    const getPokemon = async () => {
        if (!name.trim()) return;
        
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            if (!response.ok) throw new Error('Покемон не найден!');
            
            const data = await response.json();
            setPokemon(data);
            if (!searchHistory.includes(name.toLowerCase())) {
                setSearchHistory(prev => [name.toLowerCase(), ...prev.slice(0, 4)]);
            }
        } catch (error) {
            console.log('Ошибка:', error);
            setError(error.message);
            setPokemon(null);
        } finally {
            setLoading(false);
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            getPokemon();
        }
    };

    const getRandomPokemon = () => {
        const randomId = Math.floor(Math.random() * 898) + 1;
        setName(randomId.toString());
    };
    const getSprite = () => {
        if (!pokemon) return '';
        const spriteKey = isShiny ? 
            spriteType.replace('default', 'shiny') : 
            spriteType;
        return pokemon.sprites[spriteKey];
    };

    useEffect(() => {
        if (name === 'pikachu') {
            getPokemon();
        }
    }, []);

    return (
        <div className="pokemon-container">
            <h1>What is Pokemon?</h1>

            <div className="search-section">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value.toLowerCase())}
                    onKeyPress={handleKeyPress}
                    placeholder="Введите имя покемона или ID"
                    className="search-input"
                />
                <button 
                    onClick={getPokemon} 
                    disabled={loading}
                    className="search-button"
                >
                    {loading ? 'Загрузка...' : 'Найти'}
                </button>
                <button 
                    onClick={getRandomPokemon}
                    className="random-button"
                >
                    Случайный покемон
                </button>
            </div>

            {error && (
                <div className="error-message">
                    ❌ {error}
                </div>
            )}

            {pokemon && (
                <div className="pokemon-card">
                    <div className="pokemon-header">
                        <h2 className="pokemon-name">
                            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                            <span className="pokemon-id">#{pokemon.id}</span>
                        </h2>
                    </div>

                    <div className="sprite-controls">
                        <button 
                            onClick={() => setSpriteType('front_default')}
                            className={spriteType === 'front_default' ? 'active' : ''}
                        >
                            Перед
                        </button>
                        <button 
                            onClick={() => setSpriteType('back_default')}
                            className={spriteType === 'back_default' ? 'active' : ''}
                        >
                            Спинка
                        </button>
                        <button 
                            onClick={() => setIsShiny(!isShiny)}
                            className={`shiny-button ${isShiny ? 'active' : ''}`}
                        >
                            {isShiny ? '⭐ Блеск' : 'Обычный'}
                        </button>
                    </div>

                    <img 
                        src={getSprite()} 
                        alt={pokemon.name} 
                        className="pokemon-image"
                    />

                    <div className="pokemon-info">
                        <div className="info-row">
                            <span className="info-label">Вес:</span>
                            <span className="info-value">{pokemon.weight / 10} кг</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Рост:</span>
                            <span className="info-value">{pokemon.height / 10} м</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Типы:</span>
                            <span className="info-value">
                                {pokemon.types.map(type => type.type.name).join(', ')}
                            </span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Способности:</span>
                            <span className="info-value">
                                {pokemon.abilities.map(ability => ability.ability.name).join(', ')}
                            </span>
                        </div>
                    </div>

                    {searchHistory.length > 0 && (
                        <div className="search-history">
                            <h4>История поиска:</h4>
                            <div className="history-buttons">
                                {searchHistory.map(historyName => (
                                    <button
                                        key={historyName}
                                        onClick={() => {
                                            setName(historyName);
                                            getPokemon();
                                        }}
                                        className="history-button"
                                    >
                                        {historyName}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}