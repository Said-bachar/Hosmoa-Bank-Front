import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { RechargeService } from 'src/app/services/recharge/recharge.service';
import { ClientAccountsService } from 'src/app/services/accounts/client-accounts.service';
import { Account } from 'src/app/models/account.model';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-recharge-form',
  templateUrl: './recharge-form.component.html',
  styleUrls: ['./recharge-form.component.css']
})
export class RechargeFormComponent implements OnInit {
  rechargeForm=new FormGroup({
    accountNumber:new FormControl('',Validators.required),
    keySecret:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]),
    operator:new FormControl('',Validators.required),
    phoneNumber:new FormControl('',Validators.required),
    amount:new FormControl('',Validators.required)
  })
  credentialsVerified = false;

  isIncorrect=new BehaviorSubject<boolean>(false);
 
  constructor(
              private rechargeServ: RechargeService, 
              private clientAccountServ:ClientAccountsService,
              private router:Router
             ) {}

   myAccounts:Array<Account>;

  ngOnInit(): void {
    this.getClientAccounts();
  }
  getClientAccounts() {
    this.clientAccountServ.getCurrentClientAccounts()
    .subscribe((res:Array<Account>)=>{
      this.myAccounts=res;
    },
      err=>{
        console.log(err);
    })
  }
  
  next() {
    this.checkCredentials();
    // this.credentialsVerified = true;
  }
  pred(){
    this.credentialsVerified = false;
  }
  //Check Credentials
  checkCredentials() {
    this.clientAccountServ
      .checkAccountCredentials({accountNumber:this.rechargeForm.get('accountNumber').value,keySecret:this.rechargeForm.get('keySecret').value}, "recharge")
      .subscribe(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Great...',
            text: 'You can continue',
            timer:2000
          })
          this.credentialsVerified = true;
          // stepper.next();
        },
        (error) => {
          if(error.status===422){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Your Key secret is incorrect!',
            })
            this.changeisIncorrect(true);
          }
        }
      );
  }
  changeisIncorrect(value: boolean) {
    this.isIncorrect.next(value)
  }

  //Create recharge :
  createRecharge() {
    console.log(this.rechargeForm.value)
    this.rechargeServ.createRecharge(this.rechargeForm.value).subscribe(
      (recharge) => {
        Swal.fire({
          icon: 'success',
          title: 'Great...',
          text: 'Your recharge has been done :)',
          timer:2000
        })
        this.router.navigateByUrl('/')
      },
      (error) => {
        console.log("RES ERR", error);
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


      

