import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-transfer',
  templateUrl: './multiple-transfer.component.html',
  styleUrls: ['./multiple-transfer.component.css']
})
export class MultipleTransferComponent implements OnInit {

  showMe:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showBenefeciers() {
    this.showMe = !this.showMe;
  }

}
