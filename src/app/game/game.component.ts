import {Component, Input, OnInit} from '@angular/core';
import {GameService} from '../services/game.service';
import {Game, Pit} from './game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() game: Game;

  constructor(private service: GameService) { }

  ngOnInit() {
  }

  makeMove(pit: Pit) {
    if (this.game.state !== 'ENDED') {
      this.service.makeMove(this.game.id, pit.position).subscribe(game => this.game = game);
    }
  }

  isPlayerOneTurn() {
    return this.game.turn === 'PLAYER_ONE';
  }
}
