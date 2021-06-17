import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { ClientAccountsService } from 'src/app/services/accounts/client-accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(private clientAccountServ:ClientAccountsService) { }
  myAccounts:Array<Account>;

  ngOnInit(): void {
    this.getClientAccounts();
  }
  getClientAccounts() {
    this.clientAccountServ.getCurrentClientAccounts()
    .subscribe((res:Array<Account>)=>{
      this.myAccounts=res;
    },
      err=>{
        console.log(err);
    })
  }
  
}
