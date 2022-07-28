import { createContext } from 'react';

interface IPositions {
  playerPosition: number;
  oponentPosition: number;
}
export const defaultPositions: IPositions = {
  playerPosition: 50,
  oponentPosition: 50,
};
export const PositionsContext = createContext(defaultPositions);
