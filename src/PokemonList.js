import React from 'react';

export default function PokemonList({ pokemonArr }) {
  return (
    <div>
      {
        pokemonArr.map((poke, i) => <div key={poke._id + i} className="pokemon">
          <p>{poke.pokemon}</p>
          <img src={poke.url_image}/>

        </div>)
      }
    </div>
  );
}
