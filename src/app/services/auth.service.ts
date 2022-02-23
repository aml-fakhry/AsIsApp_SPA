import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //class in services to be used.
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  /* Create user */
  create(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/security/user/signup`, data);
  }

  /*Authenticate logged in user  */
  login(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/security/auth/login`, data);
  }
}
