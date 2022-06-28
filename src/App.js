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
      setPokemon(data);
    }

    doLoad();

  }, []);


  return (
    <div className="App">
      <PokemonSearch />
      <YelpSearch />
    </div>
  );
}

export default App;
