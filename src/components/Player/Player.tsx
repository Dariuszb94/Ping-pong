import React, { useEffect, useState } from 'react';
import { Pawn } from './PlayerStyles';

const Player = () => {
  const [position, setPosition] = useState(0);

  const handleKeyUpDown = (event: KeyboardEvent) => {
    console.log(event);
    if (event.key === 'ArrowUp') {
    }
    if (event.key === 'ArrowDown') {
    }
  };
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
