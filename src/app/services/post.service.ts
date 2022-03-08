import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokensService } from 'src/app/services/tokens.service';
import { postInput } from '../models/post.model';
import { responseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient, private tokensService: TokensService) {}
  /* Create post */
  create(data: postInput): Observable<responseModel> {
    return this.http.post<responseModel>(`${environment.apiUrl}/post`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokensService.getToken(),
      }),
    });
  }

  getById(id: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}/post/:${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokensService.getToken(),
      }),
    });
  }
}
