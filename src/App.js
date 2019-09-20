import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";

export default function App(props) {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Route
        path="/characters/:id"
        render={props => {
          return <CharacterCard {...props} />;
        }}
      />
    </main>
  );
}
