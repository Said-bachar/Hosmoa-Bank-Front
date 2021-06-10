import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientAuthService } from 'src/app/services/client-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private clientAuth:ClientAuthService) { }
  loginForm=new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  ngOnInit(): void {
  }
  login(){
    console.log(this.loginForm.value)
    // this.clientAuth.login
  }
}
