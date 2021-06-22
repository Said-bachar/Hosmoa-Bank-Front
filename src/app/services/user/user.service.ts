import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
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
  getUserProfil():Observable<any>{
    return this.http.get(`${environment.BASE_URL}/client/api/profil`)
  }
  changePassword(payload:{
    oldPassword: string;
    newPassword: string;
    confirmedPassword: string;
  }):Observable<any>{
    return this.http.post(`${environment.BASE_URL}/client/api/change_password`,payload)
  }
  get user():User{
    return this.token.getInfos()?this.token.getInfos().user:null;
  }
}
