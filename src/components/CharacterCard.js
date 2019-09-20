import React from "react";
import styled from "styled-components";

const DisplayCard = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 2%;
`;

export default function CharacterCard(props) {
  return (
    <DisplayCard>
      <h1>Name: {props.name}</h1>
      <h2>From: {props.origin}</h2>
      <h2>Species: {props.species}</h2>
      <h2>Last known location: {props.location}</h2>
    </DisplayCard>
  );
}
