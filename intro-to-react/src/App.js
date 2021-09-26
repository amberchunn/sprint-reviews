import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Character from "./components/Character";

const Container = styled.div`
  width: 100%;
  background: #000;
  text-align: center;
`;
const Header = styled.header`
  font-size: 2em;
  color: #fff;
  padding: 25px;
`;

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((response) => {
        // Local Variable for API Results
        const characters = response.data;

        // React Needs a Key for Each Item
        let id = 1;
        characters.forEach((item) => (item.id = id++));

        // Add to State
        setCharacters(characters);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Container className="App">
      <Header className="Header">Star Wars Characters</Header>
      {characters &&
        characters.map((person) => {
          return (
            <Character
              key={person.id}
              name={person.name}
              year={person.birth_year}
              films={person.films}
            />
          );
        })}
    </Container>
  );
};

export default App;
