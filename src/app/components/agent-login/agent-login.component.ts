import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentAuthService } from 'src/app/services/auth/agent-auth.service';
import { TokenService } from 'src/app/services/token/token.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-agent-login',
  templateUrl: './agent-login.component.html',
  styleUrls: ['./agent-login.component.css']
})
export class AgentLoginComponent implements OnInit {

  constructor(private agentAuth:AgentAuthService, 
    private router:Router,
    private token:TokenService,
    private userServ:UserService,
    private authService:AgentAuthService ) { }

  ngOnDestroy(): void {
    document.body.style.backgroundImage="url('')";
  }
  loginForm=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
    })
  ngOnInit(): void {
    
  }

  login(){
    this.authService.login(this.loginForm.value.email,this.loginForm.value.password)
    .subscribe(res=>{
      console.log(res.id,res.token)
      this.handleResponse({id:res.id,token:res.token})
    },err=>{
      console.log(err)
    })
  }
  handleResponse(data) {
    this.token.handle(data);
    this.userServ.changeAuthStatus(true);
    
    
    
    //if(this.userServ.user.role === 2) return this.router.navigateByUrl('/admin');
    return this.router.navigateByUrl('/agent-home');

}
}
