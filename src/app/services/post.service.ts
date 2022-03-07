import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokensService } from 'src/app/services/tokens.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient, private tokensService: TokensService) {}
  /* Create post */
  create(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/post`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokensService.getToken(),
      }),
    });
  }
}
