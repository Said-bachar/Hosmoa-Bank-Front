import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-navbar',
  templateUrl: './client-navbar.component.html',
  styleUrls: ['./client-navbar.component.css']
})
export class ClientNavbarComponent implements OnInit {
  constructor(private router : Router) {
    
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
}
