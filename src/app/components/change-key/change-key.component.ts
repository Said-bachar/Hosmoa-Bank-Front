import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account.model';
import { ClientAccountsService } from 'src/app/services/accounts/client-accounts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-key',
  templateUrl: './change-key.component.html',
  styleUrls: ['./change-key.component.css']
})
export class ChangeKeyComponent implements OnInit {
  changeKeyForm=new FormGroup({
    //Il faut ajouter la valodation de 8 caracteres du keySecr
    accountNumber:new FormControl('',[Validators.required]),
    keySecret:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]),
    newKeySecret:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]),
    newKeySecretConf:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(8)])
  })
  constructor(private accountService:ClientAccountsService, private router:Router) { }
  myAccounts:Array<Account>;
  keyIncorrect:boolean=false;
  ngOnInit(): void {
    this.getClientAccounts();
  }
  changeStatus(value){
    this.keyIncorrect=value;
  }
  changeKey(){
    this.accountService.changeKeySecret({
    accountNumber: this.changeKeyForm.get('accountNumber').value,
    keySecret: this.changeKeyForm.get('keySecret').value,
    newKeySecret: this.changeKeyForm.get('newKeySecret').value,
    newKeySecretConf: this.changeKeyForm.get('newKeySecretConf').value
  })
  .subscribe(res=>{
    console.log(res)
    Swal.fire({
      icon: 'success',
      title: 'Great!',
      text: 'Your Hosmoa-Key has been updated with success!',
      confirmButtonColor:'#29A3DD',
    })
    this.router.navigateByUrl('/')
  },err=>{
    if(err.status===422){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your Hosmoa-Key is incorrect!',
      })
      this.changeStatus(true);
    }
  })
  }
  getClientAccounts() {
    this.accountService.getCurrentClientAccounts()
    .subscribe((res:Array<Account>)=>{
      this.myAccounts=res;
    },
      err=>{
        console.log(err);
    })
  }
}
