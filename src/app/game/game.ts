export enum GameState {
  IN_PROGRESS,
  ENDED
}

export class Game {
  public id: number;
  public board: Board;
  public turn: string;
  public player1: string;
  public player2: string;
  public score;
  public state: GameState;

  constructor() {}
}

export class Board {
  id: number;
  pits: Pit[];

  constructor() {}
}

export class Pit {
  position: number;
  marbleCount: number;
  pitType: string;
}


