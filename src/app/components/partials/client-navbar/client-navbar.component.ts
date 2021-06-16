import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientAuthService } from 'src/app/services/auth/client-auth.service';
import { TokenService } from 'src/app/services/token/token.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-client-navbar',
  templateUrl: './client-navbar.component.html',
  styleUrls: ['./client-navbar.component.css']
})
export class ClientNavbarComponent implements OnInit {
  constructor(private router : Router,
    private userServ: UserService,
    private Token: TokenService) {
    
   }

  ngOnInit(): void {
  }
  changeActive(nav_item:string){
    // console.log(this.router.url.slice(1,this.router.url.length))
    // this.isActive=nav_item;
  }
  get url(){
    return this.router.url;
  }
  logout(){
    this.Token.remove();
    this.userServ.changeAuthStatus(false);
  //   const Toast = Swal.mixin({
  //     toast: true,
  //     position: 'top-end',
  //     showConfirmButton: false,
  //     timer: 1200,
  //     timerProgressBar: true,
  //     didOpen: (toast) => {
  //       toast.addEventListener('mouseenter', Swal.stopTimer)
  //       toast.addEventListener('mouseleave', Swal.resumeTimer)
  //     }
  // }
  }
  get user(){
    return this.userServ.user;
  }
}
