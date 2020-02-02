import {Injectable} from '@angular/core';
import { StompService } from '@stomp/ng2-stompjs';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socketUrl = 'ws://localhost:8080/socket/websocket';
  private gameUpdateUrl = '/update/game';
  private gamelistUpdateUrl = '/update/gamelist';
  private stompService: StompService;

  constructor() {
    this.stompService = new StompService({
      url: this.socketUrl,
      headers: {
        login: '',
        passcode: ''
      },
      heartbeat_in: 0,
      heartbeat_out: 20000,
      reconnect_delay: 5000,
      debug: true
    });
  }

  public subscribeToGameUpdates() {
    return this.stompService.subscribe(this.gameUpdateUrl);
  }

  public subscribeToGamelistUpdates() {
    return this.stompService.subscribe(this.gamelistUpdateUrl);
  }


}
