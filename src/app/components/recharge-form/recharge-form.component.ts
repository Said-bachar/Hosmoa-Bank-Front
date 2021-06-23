import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

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
 
  constructor() {}

  ngOnInit(): void {
  }
  
  next() {
    this.credentialsVerified = true;
  }
  pred(){
    this.credentialsVerified = false;
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


      

