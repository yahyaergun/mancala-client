export class Game {

  constructor(
    public id: number,
    public board,
    public turn: string,
    public player1: string,
    public player2: string,
    public score
  ) {}
}
