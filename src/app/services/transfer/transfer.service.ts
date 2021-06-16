import { Transfer } from 'src/app/models/transfer.model';
import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private BASE_URL = environment.BASE_URL + "client/api/transfers";

  constructor(private http : HttpClient) { }

  getAllTransfers(): Observable<any> {
    return this.http.get<any>(this.BASE_URL);
  }

  createTransfer(transfer: any) {
    return this.http.post<Transfer>(this.BASE_URL + "/create", transfer);
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
