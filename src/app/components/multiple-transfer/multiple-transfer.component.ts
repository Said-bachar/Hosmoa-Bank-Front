import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Account } from 'src/app/models/account.model';
import { Beneficiary } from 'src/app/models/beneficiary.model';
import { ClientAccountsService } from 'src/app/services/accounts/client-accounts.service';
import { BeneficiaryService } from 'src/app/services/beneficiary/beneficiary.service';
import { MutipleTransferService } from 'src/app/services/mutiple-transfer/mutiple-transfer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-multiple-transfer',
  templateUrl: './multiple-transfer.component.html',
  styleUrls: ['./multiple-transfer.component.css']
})
export class MultipleTransferComponent implements OnInit {

  showMe:boolean = false;

  MultipelTransferBenefForm = new FormGroup({})
  MultipelTransferForm = new FormGroup({
    acountNumber:new FormControl('',[Validators.required]),
    totalAmount:new FormControl('',[Validators.required]),
  })
  AllMultipleTransBenefeciries:Array<any>=[];
  // keySecret:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(8)])
  constructor(private multipleTrsfServ:MutipleTransferService, 
    private beneficiaryServices:BeneficiaryService,
    private clientAccountService:ClientAccountsService) { }

  myBeneficiaries:Beneficiary[];
  accounts:Account[];

  ngOnInit(): void {
    this.beneficiaryServices.getAllClientBeneficiary()
    .subscribe((beneficiaries:Beneficiary[])=>{
      this.myBeneficiaries=beneficiaries;
    },err=>{
      console.log(err)
    })
    this.getMyAccounts();
  }
  getMyAccounts() {
    this.clientAccountService.getCurrentClientAccounts().subscribe((accounts:Account[]) => {
      this.accounts = accounts;
    });
  }
  showBenefeciers() {
    this.showMe = !this.showMe;
  }
  show(){
    this.showMe=true;
    this.MultipelTransferBenefForm.addControl('idBeneficiary',new FormControl('',[Validators.required]));
    this.MultipelTransferBenefForm.addControl('amount',new FormControl('',[Validators.required]));
  }
  hide(){
    this.showMe=false;
    this.MultipelTransferBenefForm.removeControl('idBeneficiary')
    this.MultipelTransferBenefForm.removeControl('amount')
  }
  addMultipelTransferBenef(){
    let beneficiaryName;
    //shearch for benf Name selected
    this.myBeneficiaries.map(b=>{b.id===+this.MultipelTransferBenefForm.get('idBeneficiary').value?beneficiaryName=b.firstName+" "+b.lastName:b})
    
    const benif = {
                  beneficiaryName:beneficiaryName,
                  idBeneficiary:this.MultipelTransferBenefForm.get('idBeneficiary').value,
                  amount:+this.MultipelTransferBenefForm.get('amount').value
                }

    this.AllMultipleTransBenefeciries.push(benif);
    this.hide();
  }
  deleteMultipelTransferBenef(index) {
    this.AllMultipleTransBenefeciries.splice(index,1);
  }
  createMultipTranser(){
    const payload ={
      acountNumber : this.MultipelTransferForm.get('acountNumber').value,
      amount : +this.MultipelTransferForm.get('totalAmount').value,
      multipletransfersbeneficiaries : this.AllMultipleTransBenefeciries
    }
    console.log(payload)
    this.multipleTrsfServ.createMultipleTransfer(payload)
    .subscribe(async (res)=>{
      const id= res.id;
      // const { value: key } = await Swal.fire({
      //   title:'Confirmation',
      //   input: 'password',
      //   inputPlaceholder: 'Enter Your Hosmoa-Key...',
      //   inputAttributes: {
      //     'aria-label': 'Enter Your Hosmoa-Key...'
      //   },
      //   confirmButtonText: 'Confirm',
      //   showCancelButton: true,
      //   cancelButtonText : 'Cancel',
      //   confirmButtonColor:'#29A3DD',
      //   cancelButtonColor:'#E95314',
      // })
      // console.log(key)
      // if(key){
      //   this.multipleTrsfServ.confirmationMultipleTransfer(id,key+"")
      //   .subscribe(res=>{
      //     Swal.fire(
      //       'Succés !',
      //       'Réserver avec sucssés .',
      //       'success'
      //     )
      //   },err=>{
      //     id(err.status==422){
      //       Swal.fire(
      //         'Erreur !',
      //         'Echéc !! .',
      //         'error'
      //       )
      //     }
          
      //   })
      const { value: key } = await Swal.fire({
        title: 'Confirmation',
        input: 'password',
        inputLabel: 'Key Secret',
        inputPlaceholder: 'Enter Your Hosmoa-Key...',
        showCancelButton: true,
        confirmButtonColor:'#29A3DD',
        confirmButtonText: 'Confirm',
        cancelButtonColor:'#E95314',
        inputValidator: (key) => {
          return new Promise((resolve) => {
            if (!key) {
              resolve('You need to enter you Key Secret :)')
            }else {
              this.multipleTrsfServ.confirmationMultipleTransfer(id,{keySecret:key+""})
              .subscribe(res=>{
                Swal.fire({
                  icon: 'success',
                  title: 'Gooooooood!',
                  text: 'Your multiple transfer has been done ;)',
                  timer:2000
                })
                },err=>{
                  console.log(err)
                  if(err.status===422){//Il faut ajouter la verification du key
                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'Your balance is insufficient to perform this operation',
                    })
                  }
                }
              )
            }
          });
        }
      });
    },err=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error!',
      })
    })
  }
}
