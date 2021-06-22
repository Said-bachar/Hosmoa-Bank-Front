import { Transfer } from 'src/app/models/transfer.model';
import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Account } from 'src/app/models/account.model';


@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private BASE_URL = environment.BASE_URL + "client/api/transfers";

  constructor(private http : HttpClient) { }


  getAllTransfers(): Observable<any> {
    return this.http.get<any>('http://localhost:8085/client/api/transfers');
  }

  createTransfer(transfer:any) {
    //return this.http.post<Transfer>(this.BASE_URL + "/create", transfer);
    return this.http.post<Transfer>('http://localhost:8085/client/api/transfers/create',transfer);
  }

  confirmTransfer(id: number, request: { codeVerification: string }) {
    return this.http.post<Transfer>(`${this.BASE_URL}/${id}/confirm`, request);
  }


  confirmTransferReceipt(id: number) {
    return this.http.post<Transfer>(
      `${this.BASE_URL}/${id}/confirm_receipt`,
      {}
    );
  }
}
