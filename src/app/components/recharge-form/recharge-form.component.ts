import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

import { RechargeService } from 'src/app/services/recharge/recharge.service';
import { ClientAccountsService } from 'src/app/services/accounts/client-accounts.service';

@Component({
  selector: 'app-recharge-form',
  templateUrl: './recharge-form.component.html',
  styleUrls: ['./recharge-form.component.css']
})
export class RechargeFormComponent implements OnInit {
   
  rechargeForm=new FormGroup({
    account:new FormControl(''),
    key:new FormControl(''),
    operator:new FormControl(''),
    phone:new FormControl(''),
    amount:new FormControl('')
  })
  credentialsVerified = false;

  
 
  constructor(
              private rechargeServ: RechargeService, 
              private clientAccountsServ : ClientAccountsService
             ) {}

  ngOnInit(): void {

    // this.rechargeServ.getAllRecharges().subscribe(val => {console.log(val) })
       this.clientAccountsServ.getCurrentClientAccounts().subscribe(res => {
         console.log(res)
       })
  }
  
  next() {
    this.credentialsVerified = true;
  }
  pred(){
    this.credentialsVerified = false;
  }


  //Create recharge :
  createRecharge() {
    const request = {...this.rechargeForm.value}
    console.log(request)
    this.rechargeServ.createRecharge(request).subscribe(
      (recharge) => {
        console.log("RES", recharge);
      },
      (error) => {
        console.log("RES ERR", error);
        alert(error.error.message);
      }
    );
  }





  async recharge(){
    const { value: key } = await Swal.fire({
      title: 'Enter your Key secret',
      input: 'password',
      inputLabel: 'Key Secret',
      inputPlaceholder: 'Enter your Key secret',
      showCancelButton: true,
      confirmButtonColor:'#29A3DD',
      confirmButtonText: 'Confirm recharge',
      cancelButtonColor:'#E95314',
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (!value) {
            resolve('You need to enter you Key Secret :)')
          }else {
            console.log(this.rechargeForm.value)
            //Call the regarge service
            Swal.fire({
              icon: 'success',
              title: 'Gooooooood!',
              text: 'Your recharge has been done ;)',
              timer:2000
            })
          }
        })
      }
    });

   
    
  }
}


      

