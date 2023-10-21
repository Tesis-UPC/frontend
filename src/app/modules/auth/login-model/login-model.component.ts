import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-model',
  templateUrl: './login-model.component.html',
  styleUrls: ['./login-model.component.scss']
})
export class LoginModelComponent {
  myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialogRef: MatDialogRef<LoginModelComponent>
  ){
    this.reactiveForm();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      mail: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  goToRegister(){
    this.dialogRef.close();
    this.router.navigate(['/auth/register']);
  }

  login(){
    localStorage.setItem('isLogged', 'true');
    window.location.reload();
  }
}
