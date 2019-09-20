import React from "react";
import { Link } from "react-router-dom";

export default function CharacterCard(props) {
  console.log("card props", props);
  return (
    <div>
      <h1>name: {props.name}</h1>
      <h2>from: {props.origin}</h2>
      <h2>species: {props.species}</h2>
      <h2>last known location: {props.location}</h2>
    </div>
  );
}
