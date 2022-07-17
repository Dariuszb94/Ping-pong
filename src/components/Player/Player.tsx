import React, { useEffect, useState } from 'react';
import { Pawn } from './PlayerStyles';

const Player = () => {
  const [position, setPosition] = useState(0);

  const handleKeyUpDown = () => {};
  useEffect(() => {
    document.addEventListener('keydown', handleKeyUpDown, false);

    return () => {
      document.removeEventListener('keydown', handleKeyUpDown, false);
    };
  }, []);

  return (
    <>
      <Pawn></Pawn>
    </>
  );
};

export default Player;
