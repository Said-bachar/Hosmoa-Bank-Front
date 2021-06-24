import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ClientsManageService } from 'src/app/services/clients/clients-manage.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  user:User = new User();
  constructor(private Clients:ClientsManageService,private router:Router) { 
      this.user=new User();
  }


  ngOnInit(): void {


  }

  onSubmit() {
    this.Clients.addClient(this.user).subscribe(
      (resl) => {
        this.router.navigateByUrl('/agent-home');
      }
    )}


}
