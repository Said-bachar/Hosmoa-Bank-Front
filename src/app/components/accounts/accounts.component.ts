import { Component, OnInit } from '@angular/core';
import { ClientAccountsService } from 'src/app/services/accounts/client-accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(private clientAccountServ:ClientAccountsService) { }

  ngOnInit(): void {
    this.clientAccountServ.getCurrentClientAccounts()
    .subscribe(res=>{
      console.log(res)
    },
      err=>{
        console.log(err)
    })
  }

}
