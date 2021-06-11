import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  
  isActive="T";
  isShowed:boolean = true;

  
  

  constructor() { }

  ngOnInit(): void {
  }

  changeActive(nav_item:string){
    this.isActive=nav_item;
  }

  // toggle() {
  //   this.isShowed = !this.isShowed
  // }

}
