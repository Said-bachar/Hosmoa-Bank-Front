import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MutipleTransferService {

  constructor(private http:HttpClient) { }

  createMultipleTransfer(payload){
    return this.http.post(`${environment.BASE_URL}client/api/multipletransfers/create`,payload)
  }
}
