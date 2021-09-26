import React from "react";
import styled from "styled-components";
import Films from "./Films";

const Name = styled.button`
  width: 50%;
  padding: 15px 10px;
  margin: 5px auto;
  background: #333;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #d1d1d1;
`;
const FilmHeader = styled.h3`
  font-size: 1.25em;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  color: #fff;
  padding: 0;
  margin: 0;
`;
const Character = (props) => {
  return (
    <div>
      <Name>{`${props.name} – Born: ${props.year}`}</Name>
      <FilmHeader>Films:</FilmHeader>
      {props.films &&
        props.films.map((film) => {
          return <Films films={film} />;
        })}
    </div>
  );
};

export default Character;
