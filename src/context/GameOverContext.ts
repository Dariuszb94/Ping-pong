import { createContext } from 'react';
import { IGameOver } from '../types/types';

export const defaultGameOver: IGameOver = { isGameOver: false, winner: '' };
export const GameOverContext = createContext(defaultGameOver);
