import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-benefeciary',
  templateUrl: './add-benefeciary.component.html',
  styleUrls: ['./add-benefeciary.component.css']
})
export class AddBenefeciaryComponent implements OnInit {
  benefeciaryForm=new FormGroup({
    b_name:new FormControl(''),
    b_account:new FormControl('')
  })

  constructor() { }


  ngOnInit(): void {
    document.body.style.backgroundImage="url('../../../../assets/background.svg')";
    document.body.style.backgroundSize="cover";
    document.body.style.backgroundAttachment="fixed"
  }
  addBnefeciary(){
    
  }

}
