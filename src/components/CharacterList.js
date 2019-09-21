import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";

function CharacterList() {
  const [characterState, setCharacterState] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        const data = res.data.results;
        const result = data.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log("result", result);
        setCharacterState(result);
      })
      .catch(err => {
        console.error("error", err);
      });
  }, [query]);

  const inputHandler = e => {
    setQuery(e.target.value);
  };
  return (
    //
    <div>
      <form>
        <input
          type="text"
          onChange={inputHandler}
          value={query}
          name="name"
          placeholder="Search"
        />
      </form>
      <div>
        {characterState.map(char => {
          return (
            <CharacterCard
              name={char.name}
              gender={char.gender}
              origin={char.origin.name}
              species={char.species}
              status={char.status}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CharacterList;
