import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account.model';
import { ClientAccountsService } from 'src/app/services/accounts/client-accounts.service';
import { TransferService } from 'src/app/services/transfer/transfer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.css']
})
export class TransferFormComponent implements OnInit,OnDestroy {

  accounts:Account[];

  transfers=new FormArray([
    new FormGroup(
      {acountNumber:new FormControl(''),
      numeroCompteDest:new FormControl(''),
      amount:new FormControl(''),
      keySecret:new FormControl('')
      }
    )
  ])

  constructor(private transferService:TransferService,
    private accountService:ClientAccountsService,
    private router:Router
    ) {
    
   }

  ngOnDestroy(): void {
    document.body.style.backgroundColor='#fff'
  }

  ngOnInit(): void {
    document.body.style.backgroundColor='#29A3DD';
    this.accountService.getCurrentClientAccounts().subscribe(data => {
      this.accounts = data;
    });
  }

  createTransfer(){
    console.log(this.transfers.controls[0].value);
    this.transferService.createTransfer(this.transfers.controls[0].value).subscribe(
      (resl) => {
        console.log("Transfer confirmed !")
        this.router.navigateByUrl('/')
      },
      (error) => {
        console.log("Transfer Error", error);
      }
    );
  }

  addTransferForm(){
    this.transfers.push(new FormGroup({
      SrcAccount:new FormControl('',Validators.required),
      destAccount:new FormControl('',Validators.required),
      amount:new FormControl('',Validators.required),
      secret:new FormControl('',Validators.required)
    }))
  }
  
  deletecommandeform(index){
    if(this.transfers.length>1) this.transfers.removeAt(index)
  }

  showData(){
    console.log(this.transfers.controls.values)
  }
}
