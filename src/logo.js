import React from "react";

let Logo = (props) => {
//   let appName = "Mohammad Alamin";

  return (
    <div>
      <h1>Welcome to {props.appName} </h1>
      <img
        onClick={props.handleClick}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="logo"
      ></img>
    </div>
  );
};

export default Logo;