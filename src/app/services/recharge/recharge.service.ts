import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { Recharge } from 'src/app/models/recharge.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RechargeService {

  private BASE_URL = environment.BASE_URL +"/client/api/recharges";

  constructor(private http : HttpClient) { }

  getAllRecharges(): Observable<Recharge[]> {
    return this.http.get<Recharge[]>(this.BASE_URL);
  }

  createRecharge(recharge: any) {
    return this.http.post<Recharge>(this.BASE_URL + "/create", recharge);
  }
}
