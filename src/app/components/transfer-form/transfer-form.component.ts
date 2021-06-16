import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.css']
})
export class TransferFormComponent implements OnInit,OnDestroy {
  transfers=new FormArray([
    new FormGroup({
      ownerSelectedAccount:new FormControl(''),
      benefeciarySelectedAccont:new FormControl(''),
      pattern:new FormControl(''),
      amount:new FormControl('')
    })
  ])
  constructor() {
    // this.transferForm=new FormGroup({
    //   account:new FormControl(''),
    //   benefeciary:new FormControl('')
    // })
   }
  ngOnDestroy(): void {
    document.body.style.backgroundColor='#fff'
  }

  ngOnInit(): void {
    document.body.style.backgroundColor='#29A3DD'
  }
  addTransferForm(){
    this.transfers.push(new FormGroup({
      ownerSelectedAccount:new FormControl('',Validators.required),
      benefeciarySelectedAccount:new FormControl('',Validators.required),
      pattern:new FormControl('',Validators.required),
      amount:new FormControl('',Validators.required)
    }))
  }
  
  deletecommandeform(index){
    if(this.transfers.length>1) this.transfers.removeAt(index)
  }

  showData(){
    console.log(this.transfers.controls.values)
  }
}
