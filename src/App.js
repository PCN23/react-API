import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/fetch-utils';
import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';

function App() {
  // now make state
  const [pokemon, setPokemon] = useState([]);

  // make async function
  useEffect(() => {
    async function doLoad() {
      const data = await getPokemon();
      console.log(data);
      setPokemon(data.results);
    }

    doLoad();

  }, []);


  return (
    <div className="App">
      <div className='App-Header'>
        {
          pokemon.map((poke, i) => <div key={poke.pokemon + i}>
            <p>{poke.pokemon}</p>
          </div>)
        }
        <PokemonSearch />
        <YelpSearch />
      </div>
    </div>
  );
}

export default App;
