import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

function SearchForm({ character }) {
  const characterArray = [...character].map(x => x.name);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = characterArray.filter(character =>
      character.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = e => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <section className="search-form">
      <form>
        <label htmlFor="name">Search Character:</label>
        <input
          id="name"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <section className="character-list">
        {console.log(searchResults)}
        {searchResults.map(char => {
          return <CharacterCard char={char} />;
        })}
      </section>
    </section>
  );
}

export default SearchForm;
