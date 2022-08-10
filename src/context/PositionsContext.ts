import { createContext } from 'react';
import { IPositions } from '../types/types';

export const defaultPositions: IPositions = {
  playerPosition: 50,
};
export const PositionsContext = createContext(defaultPositions);
