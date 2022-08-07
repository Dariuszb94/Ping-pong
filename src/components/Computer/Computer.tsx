import React, { useContext } from 'react';
import { PositionsContext } from '../../context/PositionsContext';
import { Pawn } from './ComputerStyles';

interface IPlayer {
  computerPosition: number;
}

const Player = ({ computerPosition }: IPlayer) => {
  const { playerPosition } = useContext(PositionsContext);

  return (
    <>
      <Pawn position={playerPosition}></Pawn>
    </>
  );
};

export default Player;
