export interface IPlayer {
  computerPosition: number;
}

export interface IPositions {
  playerPosition: number;
}

export interface IGameOver {
  isGameOver: boolean;
  winner: string;
}

export interface IBoardContainer {
  setGameOver: React.Dispatch<
    React.SetStateAction<{
      isGameOver: boolean;
      winner: string;
    }>
  >;
}
