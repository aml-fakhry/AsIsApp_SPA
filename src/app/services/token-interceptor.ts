import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokensService } from './tokens.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokensService: TokensService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: this.tokensService.getToken() ?? '',
    };

    /* Set new req with Authorization in http headers */
    const newReq = req.clone({ setHeaders: headers });

    /* return new one */
    return next.handle(newReq);
  }
}
