import React, { useState, useEffect } from "react";

const SearchForm = ({ characterState }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      {characterState.forEach(x => {
        console.log(x.name);
      })}
    </div>
  );
};

export default SearchForm;
