import React, { useState , useEffect } from "react";

function PokemonMoves(props) {
    const [pokemonData,setPokemonData] = useState(null);
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data)
            setPokemonData(data);
          });

    },[props.pokemonId]);// [] means request for data only once, but we can change the dependency 
   return  (pokemonData ? <div>
        <p>{pokemonData.name}'s moves:</p>
        <ul>
          {pokemonData.moves.map((move, index) => {
            return <li key={index}>{move.move.name}</li>;
          })}
        </ul>
      </div> : null);

}

export default PokemonMoves;


