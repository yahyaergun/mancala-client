import {Component, OnInit} from '@angular/core';
import {GameService} from '../services/game.service';
import {Game, GameState, Pit} from './game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game: Game;

  constructor(private service: GameService) { }

  ngOnInit() {
    this.service.createGame().subscribe(game => this.game = game);
  }

  makeMove(pit: Pit) {
    if (this.game.state !== GameState.ENDED) {
      this.service.makeMove(pit.position).subscribe(game => this.game = game);
    }
  }
}
