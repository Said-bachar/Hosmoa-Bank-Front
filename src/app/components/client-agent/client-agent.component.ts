import { Component, OnInit } from '@angular/core';

import { Agency } from 'src/app/models/agency.model';
import { Agent } from 'src/app/models/agent.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-client-agent',
  templateUrl: './client-agent.component.html',
  styleUrls: ['./client-agent.component.css']
})
export class ClientAgentComponent implements OnInit {
  myAgent:Agent;
  myAgency:Agency;
  constructor(private userServ:UserService) { }

  ngOnInit(): void {
    this.getClientAgent()
  }
  getClientAgent() {
    this.userServ.getUserProfil()
    .subscribe(res=>{
      this.myAgent=res.agent;
      this.myAgency=res.agency;
    },err=>{
      console.log(err)
    })
  }
  
}
