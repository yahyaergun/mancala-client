import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameService} from '../services/game.service';
import {Game, Pit} from './game';
import {WebsocketService} from '../services/websocket.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() game: Game;
  @Output() gameEnded = new EventEmitter<boolean>();

  constructor(private service: GameService, private wsService: WebsocketService) {
  }

  ngOnInit() {
    this.wsService.subscribeToGameUpdates().subscribe(message => this.game = JSON.parse(message.body));
  }

  makeMove(pit: Pit) {
    if (this.game.state !== 'ENDED') {
      this.service.makeMove(this.game.id, pit.position).subscribe(game => this.game = game);
    }
  }

  isPlayerOneTurn() {
    return this.game.turn === 'PLAYER_ONE';
  }

  quitGame() {
    this.game = null;
    this.gameEnded.emit(true);
  }
}
