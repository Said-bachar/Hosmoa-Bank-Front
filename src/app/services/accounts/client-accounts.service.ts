import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientAccountsService {
  constructor(private http:HttpClient) { }

  getCurrentClientAccounts():Observable<Account[]>{
    return this.http.get<Account[]>(`${environment.BASE_URL}/client/api/accounts`);
  }
  checkAccountCredentials(
    payload: {
      accountNumber: string;
      keySecret: string;
    },
    operation: string
  ) {
    console.log(payload)
    return this.http.post(
      `${environment.BASE_URL}/client/api/verify_number?operation=${operation}`,payload);
  }

}
