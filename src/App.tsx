import React, { useEffect, useState } from 'react';
import BoardContainer from './components/Board/BoardContainer';
import styled from 'styled-components';
import { defaultPositions, PositionsContext } from './context/PositionsContext';

function App() {
  const [playerPosition, setPlayerPosition] = useState(
    defaultPositions.playerPosition
  );
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
        oponentPosition: playerPosition,
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
        <BoardContainer />
      </BoardOuter>
    </PositionsContext.Provider>
  );
}

export default App;

export const ButtonUp = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  width: 100%;
  min-width: 80px;
  height: 80px;
  border-radius: 4px;
  @media (min-width: 1001px) {
    margin-bottom: 8px;
  }
  @media (max-width: 1000px) {
    position: absolute;
    top: 0;
    width: calc(100% - 40px);
    margin-top: 8px;
  }
`;
export const ButtonDown = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  width: 100%;
  min-width: 80px;
  height: 80px;
  border-radius: 4px;
  @media (max-width: 1000px) {
    position: absolute;
    bottom: 0;
    width: calc(100% - 40px);
    margin-bottom: 8px;
  }
`;
export const BoardOuter = styled.div`
  display: flex;
  padding: 20px;
  @media (max-width: 1000px) {
    padding: 100px 20px;
  }
`;
