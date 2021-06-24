import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsManageService {

  constructor(private http:HttpClient) { }

  getClients():Observable<any>{
    return this.http.get<any>(`http://localhost:8085/agent/api/clients`);
  }
  addClient(user:User):Observable<any>{
    console.log(user);
    return this.http.post<User>(`${environment.BASE_URL}/agent/api/clients/add`,user);
  }
  DeleteClient(id):Observable<any>{
    return this.http.post(`${environment.BASE_URL}/agent/api/clients/${id}/delete`,{headers: {'Content-Type': 'application/json'}});
  }
}
