import { createContext } from 'react';

export const defaultPositions: IPositions = {
  playerPosition: 50,
};
export const PositionsContext = createContext(defaultPositions);
