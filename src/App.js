import React from "react";
import Logo from "./logo";
import BestPokemon from "./bestPokemon";
import CaughtPokemon from "./caughtPokemon";

let abilities = ["Anticipation", "Adaptability", "Run-Away"];
let date = new Date().toLocaleTimeString();
let App = () => {
  return (
    // we need an element and return only one element, in this case div
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon cash = {abilities}/>
      <CaughtPokemon dates = {date}/>
    </div>
  );
};

export default App;