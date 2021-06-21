import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {

  User: any;
  constructor() { }

  ngOnInit(): void {
     this.userService.getUserProfil().subscribe(data => {
    
      this.User = data;
    })
  }

}
