import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { ClientsManageService } from 'src/app/services/clients/clients-manage.service';
@Component({
  selector: 'app-agent-home',
  templateUrl: './agent-home.component.html',
  styleUrls: ['./agent-home.component.css']
})
export class AgentHomeComponent implements OnInit {

  constructor(private Clients:ClientsManageService,private router:Router) {
    
   }
  clients:Client[];


  ngOnInit(): void {
    this.Clients.getClients()
    .subscribe(data=>{
      this.clients=data;
    },
      err=>{
        console.log(err);
    })
  }
  delete(id): void{
    this.Clients.DeleteClient(id)
  }
  edit(){
    return this.router.navigateByUrl('/clients-form');
  }

}
