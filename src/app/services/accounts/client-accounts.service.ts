import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientAccountsService {

  constructor(private http:HttpClient) { }

  getCurrentClientAccounts():Observable<any>{
    return this.http.get(`${environment.BASE_URL}/client/api/accounts`);
  }

}
