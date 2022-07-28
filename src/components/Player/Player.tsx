import React, { useContext } from 'react';
import { PositionsContext } from '../../App';
import { Pawn } from './PlayerStyles';

const Player = () => {
  const { playerPosition } = useContext(PositionsContext);

  return (
    <>
      <Pawn position={playerPosition}></Pawn>
    </>
  );
};

export default Player;
