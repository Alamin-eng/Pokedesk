import React, { useState } from "react";
// import { useState } from "react/cjs/react.production.min";

function CaughtPokemon(props) {
  // let pNames = ["squitle", "Snorlax", "Picachu","Bulbasaur"];
  // const [init, setInit] = useState([]);
  // let count = () => {
  //   let num = Math.floor( Math.random() * pNames.length);
  //   setInit(init.concat(pNames[num]));
  // };
  const [init, setInit] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  const handleInputChange = (event) => {
    setPokemonNameInput(event.target.value);
  };

  const catchPokemon = () => {
     setInit(init.concat(pokemonNameInput));
     setPokemonNameInput("");
  };
  return (
    <div>
      <p>
        <input type = 'text' value={pokemonNameInput} onChange= {handleInputChange}></input>
        <button onClick={catchPokemon}>Caught</button>{" "}
        {init} Pokemon on {props.dates}
      </p>{" "}
      {/* <ul>
        {pokemonNameInput.map((e, index) => {
          return <li key={index}>{e}</li>;
        })}
      </ul> */}
    </div>
  );
}

export default CaughtPokemon;


// example of how to use props and state together 

/*import React, { useState } from "react";

function Highlighter(props) {
  let [color, thenColor] = useState("red")
  function highlightPurple() {
   return thenColor(color = "purple");
  }

  return (
    <span className={color} onClick={highlightPurple}>
      {props.word}
    </span>
  );
}

export default Highlighter; */

//use of state example

/* import React, { useState } from "react";

function Weather() {
  // Create a new state variable with useState to fix this app! Think
  // carefully about how you name it.

let [temperature,setTemp] = useState(0)

const handleIncremet = () => {
  setTemp((current) => current + 1)
}
  return (
    <div>
      <h1>Weather in London</h1>
      <p onClick={handleIncremet}>Temperature will be {temperature}°C.</p>
    </div>
  );
}

export default Weather; */


