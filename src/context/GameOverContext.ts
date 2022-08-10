import { createContext } from 'react';

interface IGameOver {
  isGameOver: boolean;
  winner: string;
}
export const defaultGameOver: IGameOver = { isGameOver: false, winner: '' };
export const GameOverContext = createContext(defaultGameOver);
