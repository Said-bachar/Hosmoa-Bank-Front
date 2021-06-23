import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MutipleTransferService } from 'src/app/services/mutiple-transfer/mutiple-transfer.service';

@Component({
  selector: 'app-multiple-transfer',
  templateUrl: './multiple-transfer.component.html',
  styleUrls: ['./multiple-transfer.component.css']
})
export class MultipleTransferComponent implements OnInit {

  showMe:boolean = false;
  // MultipelTransferBenefForms = new FormArray([])
  MultipelTransferBenefForm = new FormGroup({
  })
  AllMultipleTransBenefeciries:Array<any>=[];
  lastindex:number=0;
  // helper=new FormGroup({
  //   idBeneficiary : new FormControl(''),
  //   amount: new FormControl('')
  // })
  constructor(private multipleTrsfServ:MutipleTransferService) { }

  ngOnInit(): void {
  }
  showBenefeciers() {
    this.showMe = !this.showMe;
  }
  show(){
    this.showMe=true;
    this.MultipelTransferBenefForm.addControl('idBeneficiary',new FormControl(''));
    this.MultipelTransferBenefForm.addControl('amount',new FormControl(''));
  }
  hide(){
    this.showMe=false;
    this.MultipelTransferBenefForm.removeControl('idBeneficiary')
    this.MultipelTransferBenefForm.removeControl('amount')
    
  }
  addMultipelTransferBenef(){
    const benif = {
                  idBeneficiary:this.MultipelTransferBenefForm.get('idBeneficiary').value,
                  amount:this.MultipelTransferBenefForm.get('amount').value
                }
    this.AllMultipleTransBenefeciries.push(benif);
    this.hide();
  }

}
