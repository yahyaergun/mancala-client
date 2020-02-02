import {Component, OnInit} from '@angular/core';
import {Game} from '../game/game';
import {GameService} from '../services/game.service';
import {WebsocketService} from '../services/websocket.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  games: Game[] = [];
  currentGame: Game;

  constructor(private service: GameService, private wsService: WebsocketService) {
  }

  ngOnInit() {
    this.service.getGameList().subscribe( games => this.games = games);
    this.wsService.subscribeToGamelistUpdates().subscribe(message => this.games = JSON.parse(message.body));
  }

  createGame() {
    this.service.createGame().subscribe(game => {
      this.currentGame = game;
    });
  }

  joinGame(id) {
    this.service.joinGame(id).subscribe(game => this.currentGame = game);
  }

  currentGameEnded(gameEnded: boolean) {
    if (gameEnded === true) {
      this.currentGame = null;
      this.service.getGameList().subscribe( games => this.games = games);
      this.wsService.subscribeToGamelistUpdates().subscribe(message => this.games = JSON.parse(message.body));
    }
  }
}
