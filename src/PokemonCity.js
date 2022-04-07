import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

function updateCity(event){
setCity(event.target.value.toUpperCase());
}
  return (
    <div className="city-div">
      <input type="text" value={city} onChange={updateCity}/>
      <p className="citytext">Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;
