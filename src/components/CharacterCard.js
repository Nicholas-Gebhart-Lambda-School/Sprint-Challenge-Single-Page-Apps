import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  text-align: center;
  margin: 0 auto 5%;
  width: 80%;
  background: #333;
  color: white;
  padding: 2%;
`;

const CharacterCard = props => {
  console.log("card properties:", props);
  return (
    //
    <CardContainer>
      <h1>Name: {props.name}</h1>
      <h2>Gender: {props.gender}</h2>
      <h3>From: {props.origin}</h3>
      <h3>Species: {props.species}</h3>
      <h3>Status: {props.status}</h3>
    </CardContainer>
  );
};

export default CharacterCard;
