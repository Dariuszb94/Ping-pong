import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import { Ball } from './BallStyles';
import { Board } from './BoardContainerStyles';

interface BoardContainerProps {
  position: number;
}

const BoardContainer = ({ position }: BoardContainerProps) => {
  const [ballPositionY, setBallPositionY] = useState(50);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBallPositionY((prev) => prev + 10);
    }, 500);

    return () => clearInterval(intervalId); //This is important
  }, []);
  return (
    <Board>
      <Player position={position} />
      <Ball ballPositionY={ballPositionY}></Ball>
    </Board>
  );
};

export default BoardContainer;
