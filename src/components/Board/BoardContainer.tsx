import React, { useContext, useEffect, useState } from 'react';
import { PositionsContext } from '../../context/PositionsContext';
import { IBoardContainer } from '../../types/types';
import Computer from '../Computer/Computer';
import Player from '../Player/Player';
import { Ball } from './BallStyles';
import { Board } from './BoardContainerStyles';

const BoardContainer = ({ setGameOver }: IBoardContainer) => {
  const [ballPositionX, setBallPositionX] = useState(50);
  const [ballPositionY, setBallPositionY] = useState(50);
  const [isBallRightToLeft, setIsBallRightToLeft] = useState(false);
  const [isBallBottomToUp, setIsBallBottomToUp] = useState(false);

  const { playerPosition } = useContext(PositionsContext);

  useEffect(() => {
    const randomAngle = Math.random() * (0.9 - 1.1) + 0.9;

    const intervalId = setInterval(() => {
      if (isBallRightToLeft) setBallPositionX((prev) => prev - randomAngle);
      else setBallPositionX((prev) => prev + randomAngle);

      if (isBallBottomToUp) setBallPositionY((prev) => prev - 1);
      else setBallPositionY((prev) => prev + 1);
    }, 30);

    return () => clearInterval(intervalId);
  }, [isBallBottomToUp, isBallRightToLeft]);
  useEffect(() => {
    if (
      ballPositionX >= 93 &&
      (playerPosition > ballPositionY || playerPosition + 20 < ballPositionY)
    ) {
      setGameOver({ isGameOver: true, winner: 'player' });
    }
    if (ballPositionY >= 97 && !isBallBottomToUp) {
      setIsBallBottomToUp(true);
    }
    if (ballPositionX >= 93 && !isBallRightToLeft) {
      setIsBallRightToLeft(true);
    }
    if (ballPositionX <= 1 && isBallRightToLeft) {
      setIsBallRightToLeft(false);
    }
    if (ballPositionY <= 3 && isBallBottomToUp) {
      setIsBallBottomToUp(false);
    }
  }, [
    ballPositionX,
    ballPositionY,
    isBallBottomToUp,
    isBallRightToLeft,
    playerPosition,
    setGameOver,
  ]);
  return (
    <Board>
      <Player />
      <Computer computerPosition={50} />
      <Ball ballPositionX={ballPositionX} ballPositionY={ballPositionY}></Ball>
    </Board>
  );
};

export default BoardContainer;
