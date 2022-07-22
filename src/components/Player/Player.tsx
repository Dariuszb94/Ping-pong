import React, { useEffect, useState } from 'react';
import { Pawn } from './PlayerStyles';

const Player = () => {
  const [position, setPosition] = useState(0);

  const handleKeyUpDown = (event: KeyboardEvent) => {
    console.log(position);
    if (event.key === 'ArrowUp') {
      setPosition((prev) => {
        if (prev >= 10) return prev - 10;
        return prev;
      });
    }
    if (event.key === 'ArrowDown') {
      setPosition((prev) => {
        if (prev <= 70) return prev + 10;
        return prev;
      });
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyUpDown, false);

    return () => {
      document.removeEventListener('keydown', handleKeyUpDown, false);
    };
  });

  return (
    <>
      <Pawn position={position}></Pawn>
    </>
  );
};

export default Player;
