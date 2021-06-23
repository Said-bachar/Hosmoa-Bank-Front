import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit ,OnDestroy{
  
  isActive="T";
  isShowed:String = "T";

  
  

  constructor() { }
  ngOnDestroy(): void {
    document.body.style.backgroundImage="url('')";
  }

  ngOnInit(): void {
     document.body.style.backgroundImage="url('../../../../assets/background.svg')";
     document.body.style.backgroundSize="cover";
     document.body.style.backgroundAttachment="fixed"
  }

  changeActive(nav_item:string){
    this.isActive=nav_item;
  }

  // toggle() {
  //   this.isShowed = !this.isShowed
  // }

}
