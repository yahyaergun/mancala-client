import {Player} from '../player/player';

export type GameState = 'WAITING_FOR_PLAYERS' | 'IN_PROGRESS' | 'ENDED';

export class Game {
  public id: number;
  public board: Board;
  public turn: string;
  public player1: Player;
  public player2: Player;
  public score: Score;
  public state: GameState;

  constructor() {}
}

export class Score {
  public playerOneScore: number;
  public playerTwoScore: number;
}


export class Board {
  pits: Pit[];

  constructor() {}
}

export class Pit {
  position: number;
  marbleCount: number;
  pitType: string;
}


