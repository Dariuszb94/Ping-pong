import React from 'react';
import { Pawn } from './PlayerStyles';

interface PlayerProps {
  position: number;
}
const Player = ({ position }: PlayerProps) => {
  return (
    <>
      <Pawn position={position}></Pawn>
    </>
  );
};

export default Player;
