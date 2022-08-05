import React, { useContext, useEffect, useState } from 'react';
import { PositionsContext } from '../../context/PositionsContext';
import Computer from '../Computer/Computer';
import Player from '../Player/Player';
import { Ball } from './BallStyles';
import { Board } from './BoardContainerStyles';

const BoardContainer = () => {
  const [ballPositionX, setBallPositionX] = useState(50);
  const [ballPositionY, setBallPositionY] = useState(50);
  const [isBallRightToLeft, setIsBallRightToLeft] = useState(false);
  const [isBallBottomToUp, setIsBallBottomToUp] = useState(false);

  const { playerPosition } = useContext(PositionsContext);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isBallRightToLeft) setBallPositionX((prev) => prev - 1);
      else setBallPositionX((prev) => prev + 1);

      if (isBallBottomToUp) setBallPositionY((prev) => prev - 1);
      else setBallPositionY((prev) => prev + 1);
    }, 100);

    return () => clearInterval(intervalId);
  }, [isBallBottomToUp, isBallRightToLeft]);
  useEffect(() => {
    if (ballPositionY === 97 && !isBallBottomToUp) setIsBallBottomToUp(true);
    if (ballPositionX === 93 && !isBallRightToLeft) setIsBallRightToLeft(true);
    if (ballPositionX === 1 && isBallRightToLeft) setIsBallRightToLeft(false);
    if (ballPositionY === 3 && isBallBottomToUp) setIsBallBottomToUp(false);
  }, [
    ballPositionX,
    ballPositionY,
    isBallBottomToUp,
    isBallRightToLeft,
    playerPosition,
  ]);
  return (
    <Board>
      <Player />
      <Computer />
      <Ball ballPositionX={ballPositionX} ballPositionY={ballPositionY}></Ball>
    </Board>
  );
};

export default BoardContainer;
