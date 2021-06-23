import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private tokenServ:TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.tokenServ.getToken()){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.tokenServ.getToken()}`
        }
      });
    }
    

    return next.handle(request);
  }
}
