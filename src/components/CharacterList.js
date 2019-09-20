import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res.data.results);
        setCharacter(res.data.results);
      })
      .catch(err => {
        console.error("there was an error", err);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {character.map((char, index) => {
        return (
          <CharacterCard
            id={char.id}
            key={index}
            name={char.name}
            location={char.location.name}
            origin={char.origin.name}
            species={char.species}
          />
        );
      })}
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
