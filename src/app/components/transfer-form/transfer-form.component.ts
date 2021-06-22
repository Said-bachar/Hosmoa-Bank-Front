import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
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
  // @Output()  isShowedChange = new EventEmitter<boolean>();

  accounts:Account[];
  
  isIncorrect=new BehaviorSubject<boolean>(false);
  
  transfers=new FormArray([
    new FormGroup(
      {acountNumber:new FormControl('',[Validators.required]),
      numeroCompteDest:new FormControl('',[Validators.required]),
      amount:new FormControl('',[Validators.required]),
      keySecret:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(8)])
      }
    )
  ])

  constructor(private transferService:TransferService,
    private accountService:ClientAccountsService,
    private router:Router
    ) {
    
   }

  ngOnDestroy(): void {
    // document.body.style.backgroundColor='#fff'
  }

  ngOnInit(): void {
    this.accountService.getCurrentClientAccounts().subscribe(data => {
      this.accounts = data;
    });
  }

  createTransfer(){
    console.log(this.transfers.controls[0].value);
    this.transferService.createTransfer(this.transfers.controls[0].value).subscribe(
      (resl) => {
        Swal.fire({
          icon: 'success',
          title: 'Transfer confirmed!',
          text: 'Your can check your Transfer Track!',
          confirmButtonColor:'#29A3DD',
        })
        this.router.navigateByUrl('/')
      },
      (error) => {
        console.log("Transfer Error", error);
        if(error.status===422){
          Swal.fire({
            icon: 'error',
            title: 'Oooops!',
            text: 'Your key is incorrect!',
            confirmButtonColor:'#29A3DD',
          })
          this.isIncorrect.next(true)
        }
        
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
  changeisIncorrect(value: boolean) {
    this.isIncorrect.next(value)
  }

}
