import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientAccountsService } from 'src/app/services/accounts/client-accounts.service';
import { ClientGestionService } from 'src/app/services/client-gestion.service';

@Component({
  selector: 'app-agent-home',
  templateUrl: './agent-home.component.html',
  styleUrls: ['./agent-home.component.css']
})
export class AgentHomeComponent implements OnInit {

  constructor(private Clients:ClientGestionService) { }
  clients:Client[];

  ngOnInit(): void {
    this.Clients.getClients()
    .subscribe((data:Client[])=>{
      this.clients=data;
    },
      err=>{
        console.log(err);
    })
  }


}
