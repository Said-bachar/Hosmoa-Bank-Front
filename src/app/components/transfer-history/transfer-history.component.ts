import { Component, OnInit } from '@angular/core';
import { Transfer } from 'src/app/models/transfer.model';
import { TransferService } from 'src/app/services/transfer/transfer.service';

@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.css']
})
export class TransferHistoryComponent implements OnInit {

  transfers:Transfer[];

  constructor(private transferService:TransferService) { }

  ngOnInit(): void {
    // document.body.style.backgroundColor='#29A3DD';
    this.transferService.getAllTransfers().subscribe(data => {
      this.transfers = data;
    });
  }

}
