import { Injectable } from '@angular/core';

import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { TokensService } from './tokens.service';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socket: any;
  constructor(private tokensService: TokensService) {}

  /**
   * Get socket.
   * @returns socket.
   */
  getSocket() {
    this.socket = io(environment.socketHost, {
      extraHeaders: {
        'Content-Type': 'application/json',
        Authorization: this.tokensService.getToken(),
      },
    });

    this.socket.on('disconnect', () => {
      console.log('disconnect');
    });

    return this.socket;
  }
}
