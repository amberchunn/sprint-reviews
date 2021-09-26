import React from "react";
import styled from "styled-components";

const FilmInfo = styled.div`
  width: 25%;
  padding: 5px;
  margin: 15px auto;
  background: #ff0000;
  border: 1px solid #333;
  border-radius: 5px;
  color: #d1d1d1;
`;

const Films = (props) => {
  return (
    <div>
      <FilmInfo>{`${props.films}`}</FilmInfo>
    </div>
  );
};

export default Films;
