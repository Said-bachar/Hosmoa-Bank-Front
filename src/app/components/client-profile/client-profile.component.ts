import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {

  User: any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
     this.userService.getUserProfil().subscribe(data => {
    
      this.User = data;
    })
  }

}
