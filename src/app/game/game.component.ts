import { Component, OnInit } from '@angular/core';
import {GameService} from '../services/game.service';
import {Game} from './game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game;

  constructor(private service: GameService) { }

  ngOnInit() {
    this.service.createGame().subscribe(game => this.game = JSON.stringify(game));
  }

}
