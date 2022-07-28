import React, { useContext, useEffect, useState } from 'react';
import { PositionsContext } from '../../context/PositionsContext';
import Player from '../Player/Player';
import { Ball } from './BallStyles';
import { Board } from './BoardContainerStyles';

const BoardContainer = () => {
  const [ballPositionX, setBallPositionX] = useState(50);
  const [ballPositionY, setBallPositionY] = useState(50);
  const { playerPosition } = useContext(PositionsContext);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBallPositionX((prev) => prev + 1);
      setBallPositionY((prev) => prev + 1);
    }, 300);

    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    console.log(ballPositionX);
  }, [ballPositionX, ballPositionY, playerPosition]);
  return (
    <Board>
      <Player />
      <Ball ballPositionX={ballPositionX} ballPositionY={ballPositionY}></Ball>
    </Board>
  );
};

export default BoardContainer;
