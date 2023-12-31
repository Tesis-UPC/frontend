import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
  ){
    this.reactiveForm();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      mail: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]]
    });
  }

}
