import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.css']
})
export class TransferFormComponent implements OnInit,OnDestroy {
  transfers:Array<any>=[{
    account:'',
    benefeciary:'',
    amount:0
  }];
  amount;
  transferForm;
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
    this.transfers.push({})
  }
  
  deletecommandeform(index){
    if(this.transfers.length>1) this.transfers.splice(index,1)
  }
  showData(){
    console.log(this.amount)
  }
}
