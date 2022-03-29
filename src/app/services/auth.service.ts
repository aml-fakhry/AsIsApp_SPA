import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //class in services to be used.
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokensService } from './tokens.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private tokensService: TokensService) {}

  /* Create user */
  create(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/security/user/signup`, data);
  }

  /*Authenticate logged in user  */
  login(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/security/auth/login`, data);
  }

  getUserById(_id: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}/security/user/${_id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokensService.getToken(),
      }),
    });
  }
}
