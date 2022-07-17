import React from 'react';
import styled from 'styled-components';

const Player = () => {
  return (
    <>
      <Pawn></Pawn>
    </>
  );
};

export default Player;

const Pawn = styled.div`
  height: 200px;
  width: 40px;
  background-color: black;
`;
