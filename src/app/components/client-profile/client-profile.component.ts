import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {

  user: User;
  constructor(private userService:UserService) { }
  urlImg:string='../../../assets/user_profile.png';
  ngOnInit(): void {
     this.userService.getUserProfil().subscribe((user:User) => {
      this.user = user;
    })
  }

}
