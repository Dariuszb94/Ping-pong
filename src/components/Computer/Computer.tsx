import React from 'react';
import { IPlayer } from '../../types/types';
import { Pawn } from './ComputerStyles';

const Player = ({ computerPosition }: IPlayer) => {
  return (
    <>
      <Pawn position={computerPosition}></Pawn>
    </>
  );
};

export default Player;
