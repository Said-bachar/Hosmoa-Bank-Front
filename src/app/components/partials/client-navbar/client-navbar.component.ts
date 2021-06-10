import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-navbar',
  templateUrl: './client-navbar.component.html',
  styleUrls: ['./client-navbar.component.css']
})
export class ClientNavbarComponent implements OnInit {
  isActive="";
  constructor() { }

  ngOnInit(): void {
  }
  changeActive(nav_item:string){
    this.isActive=nav_item;
  }
}
