import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import { Board } from './BoardContainerStyles';

const BoardContainer = () => {
  return (
    <>
      <Board>
        <Player />
      </Board>
    </>
  );
};

export default BoardContainer;
