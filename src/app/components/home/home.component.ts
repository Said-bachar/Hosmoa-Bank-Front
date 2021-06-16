import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token/token.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tokenServ:TokenService,
              private userServ:UserService) { }

  ngOnInit(): void {
    console.log(this.tokenServ.getExpiryTime())
  }

  get user(){
    return this.userServ.user;
  }

}
