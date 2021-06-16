import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn());
  authStatus = this.loggedIn.asObservable();

  constructor(private token:TokenService,
    private http:HttpClient) { }

  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }
  get user():User{
    return this.token.getInfos().user;
  }
}
