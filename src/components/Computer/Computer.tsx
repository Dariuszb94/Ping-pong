import React, { useContext } from 'react';
import { PositionsContext } from '../../context/PositionsContext';
import { Pawn } from './ComputerStyles';

const Player = () => {
  const { playerPosition } = useContext(PositionsContext);

  return (
    <>
      <Pawn position={playerPosition}></Pawn>
    </>
  );
};

export default Player;
