import React from 'react';
import { useEffect, useState } from 'react';
import PokemonList from './PokemonList';
import { getPokemon } from './services/fetch-utils';

export default function PokemonSearch() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonQuery, setPokemonQuery] = useState([]);
  
  useEffect(() => {
    doLoad();
  }, []);
  
  async function doLoad() {
    const data = await getPokemon(pokemonQuery);
    setPokemon(data.results);
  }
  
    // make async function
  
  async function handleSubmit(e) {
    e.preventDefault();
    await doLoad();
    setPokemonQuery('');
  }
  

  return (
    <div className='pokemon-search'>
      <form onSubmit={handleSubmit}>
        <input value={pokemonQuery} onChange={e => setPokemonQuery(e.target.value)}/>
        <button>Search</button>
      </form>
      <PokemonList pokemonArr={pokemon}/>
    </div>

    






    
  );
}
