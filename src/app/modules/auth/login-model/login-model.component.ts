import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClientLogin } from 'src/app/interfaces/client';
import { AuthService } from 'src/app/services/auth.service';

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
    private authService: AuthService,
    private snackBar: MatSnackBar,
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
    const userLogin: ClientLogin = {
      email: this.myForm.controls['mail'].value,
      password: this.myForm.controls['password'].value
    }

    this.authService.login(userLogin).subscribe({
      next: (token:any) => {
        this.snackBar.open('Ingreso exitoso!', '', {
          duration: 3000,
        });
        localStorage.setItem('token','Bearer '+ token.access_token);
        localStorage.setItem('isLogged', 'true');
        window.location.reload();
      },
      error: () => {
        this.snackBar.open('Datos incorrectos', '',{
          duration: 3000,
        });
      },
    });

  }
}
