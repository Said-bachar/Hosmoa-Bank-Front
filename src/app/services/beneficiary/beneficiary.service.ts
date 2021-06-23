import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beneficiary } from 'src/app/models/beneficiary.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  constructor(private http:HttpClient) { }

  getAllClientBeneficiary():Observable<Beneficiary[]>{
    return this.http.get<Beneficiary[]>(`${environment.BASE_URL}/client/api/allBeneficiaries`);
  }
  addBeneficiary(payload){
    return this.http.post(`${environment.BASE_URL}/client/api/addBeneficiary`,payload);
  }
}
