import { Injectable } from '@angular/core';

import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socket: any;
  constructor() {}

  /**
   * Get socket.
   * @returns socket.
   */
  getSocket() {
    return (this.socket = io(environment.socketHost));
  }
}
