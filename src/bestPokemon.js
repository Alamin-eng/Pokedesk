import React from "react";

let BestPokemon = (props) => {
  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {props.cash.map((ability) => (
          <li key={ability + 1}>{ability}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
