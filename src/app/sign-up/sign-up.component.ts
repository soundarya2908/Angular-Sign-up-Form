import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user:User;
  

  constructor() { 
  }

  ngOnInit(): void {
  }

  OnSubmit(form:NgForm) {
    console.log(form.value);
    form.reset();
  }

}
