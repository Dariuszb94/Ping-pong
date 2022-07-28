import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import { Ball } from './BallStyles';
import { Board } from './BoardContainerStyles';

interface BoardContainerProps {
  position: number;
}

const BoardContainer = ({ position }: BoardContainerProps) => {
  const [ballPositionX, setBallPositionX] = useState(50);
  const [ballPositionY, setBallPositionY] = useState(50);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBallPositionX((prev) => prev + 10);
      setBallPositionY((prev) => prev + 10);
    }, 500);

    return () => clearInterval(intervalId); //This is important
  }, []);
  return (
    <Board>
      <Player position={position} />
      <Ball ballPositionX={ballPositionX} ballPositionY={ballPositionY}></Ball>
    </Board>
  );
};

export default BoardContainer;
