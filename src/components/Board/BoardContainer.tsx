import React from 'react';
import Player from '../Player/Player';
import { Board } from './BoardContainerStyles';

interface BoardContainerProps {
  position: number;
}

const BoardContainer = ({ position }: BoardContainerProps) => {
  return (
    <Board>
      <Player position={position} />
    </Board>
  );
};

export default BoardContainer;
