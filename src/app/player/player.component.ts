import {Component, OnInit} from '@angular/core';
import {Player} from './player';
import {PlayerService} from '../services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  currentPlayer: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  login(name: string) {
    this.playerService.login(name).subscribe(player => this.currentPlayer = player);
  }

}
