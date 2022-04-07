import React from "react";
import Logo from "./logo";
import BestPokemon from "./bestPokemon";
import CaughtPokemon from "./caughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";


let abilities = ["Anticipation", "Adaptability", "Run-Away"];
let date = new Date().toLocaleTimeString();

let App = () => {
  let clicked = () => {
  console.log("The logo was clicked");
};
  return (
    // we need an element and return only one element, in this case div
    <div>
      <Logo appName="Pokedex" handleClick={clicked} />
      <BestPokemon cash={abilities} />
      <CaughtPokemon dates={date} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
};

export default App;