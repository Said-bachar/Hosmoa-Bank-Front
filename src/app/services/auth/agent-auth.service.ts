import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentAuthService {

  constructor(private http:HttpClient) { }
  login(email:string,pass:string):Observable<any>{
    return this.http.post(`${environment.BASE_URL}/api/auth`,{email:email,password:pass},{headers: {'Content-Type': 'application/json'}});
  }
}
