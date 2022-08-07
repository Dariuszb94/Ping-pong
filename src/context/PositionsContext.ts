import { createContext } from 'react';

interface IPositions {
  playerPosition: number;
}
export const defaultPositions: IPositions = {
  playerPosition: 50,
};
export const PositionsContext = createContext(defaultPositions);
