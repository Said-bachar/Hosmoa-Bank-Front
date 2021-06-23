import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientAuthService } from 'src/app/services/auth/client-auth.service';
import { TokenService } from 'src/app/services/token/token.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private clientAuth:ClientAuthService, 
    private router:Router,
    private token:TokenService,
    private userServ:UserService,
    private authService:ClientAuthService ) { }

  ngOnDestroy(): void {
    document.body.style.backgroundImage="url('')";
  }
  loginForm=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  ngOnInit(): void {
    document.body.style.backgroundImage="url('../../../../assets/welcome.svg')";
    document.body.style.backgroundSize="cover";
    document.body.style.backgroundAttachment="fixed";
  }

  login(){
    this.authService.login(this.loginForm.value.email,this.loginForm.value.password)
    .subscribe(res=>{
      this.handleResponse({id:res.id,token:res.token})
    },err=>{
      console.log(err)
    })
  }
  handleResponse(data) {
    this.token.handle(data);
    this.userServ.changeAuthStatus(true);
    return this.router.navigateByUrl('/');
  }
}
