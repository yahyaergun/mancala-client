import {Component, OnInit} from '@angular/core';
import {Game} from '../game/game';
import {GameService} from '../services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  games: Game[] = [];
  currentGame: Game;

  constructor(private service: GameService) {
  }

  ngOnInit() {
    this.getGameList();
  }

  createGame() {
    this.service.createGame().subscribe(game => {
      this.currentGame = game;
      this.games.push(game);
    });
  }

  joinGame(id) {
    this.service.joinGame(id).subscribe(game => this.currentGame = game);
  }

  getGameList() {
    this.service.getGameList().subscribe(gameList => this.games = gameList);
  }
}
