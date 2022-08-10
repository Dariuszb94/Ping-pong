import React, { useEffect, useState } from 'react';
import { BoardOuter, ButtonUp, ButtonDown } from './AppStyles';
import BoardContainer from './components/Board/BoardContainer';
import { defaultPositions, PositionsContext } from './context/PositionsContext';

function App() {
  const [playerPosition, setPlayerPosition] = useState(
    defaultPositions.playerPosition
  );
  const [gameOver, setGameOver] = useState({ isGameOver: false, winner: '' });

  const handleKeyUpDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowUp') {
      setPlayerPosition((prev) => {
        if (prev >= 10) return prev - 10;
        return prev;
      });
    }
    if (event.key === 'ArrowDown') {
      setPlayerPosition((prev) => {
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
    <PositionsContext.Provider
      value={{
        playerPosition: playerPosition,
      }}
    >
      <BoardOuter>
        <section>
          <ButtonUp
            onClick={() =>
              setPlayerPosition((prev) => {
                if (prev >= 10) return prev - 10;
                return prev;
              })
            }
          >
            UP
          </ButtonUp>
          <ButtonDown
            onClick={() =>
              setPlayerPosition((prev) => {
                if (prev <= 70) return prev + 10;
                return prev;
              })
            }
          >
            DOWN
          </ButtonDown>
        </section>
        <BoardContainer setGameOver={setGameOver} />
      </BoardOuter>
    </PositionsContext.Provider>
  );
}

export default App;
