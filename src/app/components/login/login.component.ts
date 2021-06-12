import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientAuthService } from 'src/app/services/client-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private clientAuth:ClientAuthService,private router:Router) { }
  ngOnDestroy(): void {
    document.body.style.backgroundImage="url('')";
  }
  loginForm=new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  ngOnInit(): void {
    document.body.style.backgroundImage="url('../../../../assets/welcome.svg')";
    document.body.style.backgroundSize="cover";
    document.body.style.backgroundAttachment="fixed";
  }
  login(){
    console.log(this.loginForm.value)
    // this.clientAuth.login
    this.router.navigateByUrl('/')
  }
}
