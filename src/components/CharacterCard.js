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
      <h1>{props.char}</h1>
    </DisplayCard>
  );
}
