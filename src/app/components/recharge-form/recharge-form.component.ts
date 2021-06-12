import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recharge-form',
  templateUrl: './recharge-form.component.html',
  styleUrls: ['./recharge-form.component.css']
})
export class RechargeFormComponent implements OnInit {
   
  credentialsVerified = false;
 
  constructor() { }

  ngOnInit(): void {
  }
  
  next() {
    this.credentialsVerified = true;
  }

}
