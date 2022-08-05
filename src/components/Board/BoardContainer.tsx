import React, { useContext, useEffect, useState } from 'react';
import { PositionsContext } from '../../context/PositionsContext';
import Player from '../Player/Player';
import { Ball } from './BallStyles';
import { Board } from './BoardContainerStyles';

const BoardContainer = () => {
  const [ballPositionX, setBallPositionX] = useState(50);
  const [ballPositionY, setBallPositionY] = useState(50);
  const [isBallRightToLeft, setIsBallRightToLeft] = useState(false);

  const { playerPosition } = useContext(PositionsContext);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isBallRightToLeft) setBallPositionX((prev) => prev - 1);
      else setBallPositionX((prev) => prev + 1);
      setBallPositionY((prev) => prev + 1);
    }, 160);

    return () => clearInterval(intervalId);
  }, [isBallRightToLeft]);
  useEffect(() => {
    if (ballPositionX === 93 && !isBallRightToLeft) {
      setIsBallRightToLeft(true);
    }
  }, [ballPositionX, ballPositionY, isBallRightToLeft, playerPosition]);
  return (
    <Board>
      <Player />
      <Ball ballPositionX={ballPositionX} ballPositionY={ballPositionY}></Ball>
    </Board>
  );
};

export default BoardContainer;
