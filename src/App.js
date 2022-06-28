import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/fetch-utils';
import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';

function App() {
  // now make state
  const [pokemon, setPokemon] = useState([]);
  const [pokemonQuery, setPokemonQuery] = useState([]);


  // make async function
  useEffect(() => {
    async function doLoad() {
      const data = await getPokemon();
      setPokemon(data.results);
    }

    doLoad();

  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
  }

  console.log(pokemonQuery);
  
  return (
    <div className="App">
      <form handleSubmit={handleSubmit}>
        <input onChange={e => setPokemonQuery(e.target.value)}/>
        <button>Search</button>
      </form>
      {
        pokemon.map((poke, i) => <div key={poke.pokemon + i} className="pokemon">
          <p>{poke.pokemon}</p>
          <img src={poke.url_image}/>

        </div>)
      }
      <PokemonSearch />
      <YelpSearch />
    </div>
  );
}

export default App;
