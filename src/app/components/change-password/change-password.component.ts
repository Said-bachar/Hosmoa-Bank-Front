import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm=new FormGroup({
    oldPassword:new FormControl('',Validators.required),
    newPassword:new FormControl('',Validators.required),
    confirmedPassword:new FormControl('',Validators.required)
  })
  keyIncorrect: any=false;
  
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  changePassword(){
    this.userService.changePassword({
      oldPassword: this.changePasswordForm.get('oldPassword').value,
      newPassword: this.changePasswordForm.get('newPassword').value,
      confirmedPassword: this.changePasswordForm.get('confirmedPassword').value,
    })
    .subscribe(res=>{
      Swal.fire({
        icon: 'success',
        title: 'Great!',
        text: 'Your password has been updated with success!',
        confirmButtonColor:'#29A3DD',
      })
      this.router.navigateByUrl('/')
    },err=>{
      if(err.status===403){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Your old Password is incorrect!',
        })
        this.changeStatus(true);
      }
    })
  }
  changeStatus(value: boolean) {
    this.keyIncorrect=value;
  }
}
