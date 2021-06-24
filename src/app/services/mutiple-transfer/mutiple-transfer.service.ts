import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MutipleTransferService {

  constructor(private http:HttpClient) { }

  createMultipleTransfer(payload):Observable<any>{
    return this.http.post(`${environment.BASE_URL}/client/api/multipletransfers/create`,payload);
  }
  confirmationMultipleTransfer(id:number,payload:{keySecret:string}):Observable<any>{
    return this.http.post(`${environment.BASE_URL}/client/api/multipletransfers/${id}/confirm`,payload);
  }
}
