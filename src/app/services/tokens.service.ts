import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class TokensService {
  constructor(private cookieService: CookieService) {}

  /* Set new token */
  setToken(token: string) {
    this.cookieService.set('token', token);
  }

  /* Gets token */
  getToken(): string {
    return this.cookieService.get('token');
  }

  /* Delete token */
  deleteToken() {
    return this.cookieService.delete('token');
  }

  /* get payload */
  getPayload() {
    const token = this.getToken();
    return token ? JSON.parse(window.atob(token.split('.')[1])) : '';
  }
}
