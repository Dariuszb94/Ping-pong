import React from 'react';
import { Pawn } from './ComputerStyles';

interface IPlayer {
  computerPosition: number;
}

const Player = ({ computerPosition }: IPlayer) => {
  return (
    <>
      <Pawn position={computerPosition}></Pawn>
    </>
  );
};

export default Player;
