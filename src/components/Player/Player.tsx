import React, { useEffect, useState } from 'react';
import { Pawn } from './PlayerStyles';

const Player = () => {
  const [position, setPosition] = useState(0);

  const handleKeyUpDown = (event: KeyboardEvent) => {
    console.log(event);
    if (event.key === 'ArrowUp') {
      setPosition((prev) => prev + 10);
    }
    if (event.key === 'ArrowDown') {
      setPosition((prev) => prev - 10);
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
      <Pawn position={position}></Pawn>
    </>
  );
};

export default Player;
