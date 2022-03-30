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

  /**
   * Get all user posts.
   * @returns void
   */
  getUserPosts(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/post/user-posts`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokensService.getToken(),
      }),
    });
  }

  /**
   * Get all posts.
   */
  getAllPosts(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/post/posts`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokensService.getToken(),
      }),
    });
  }

  /**
   *
   * @param PostId the post id.
   * @returns void
   */
  getById(PostId: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}/post/:${PostId}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokensService.getToken(),
      }),
    });
  }

  /**
   * Add like to specific post.
   * @param PostId the post id to be liked.
   * @returns void
   */
  addLike(PostId: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}/post/like/${PostId}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokensService.getToken(),
      }),
    });
  }
}
