import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClientLogin } from 'src/app/interfaces/client';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
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
    this.router.navigate(['/auth/register']);
  }

  login(){
    const userLogin: ClientLogin = {
      email: this.myForm.controls['mail'].value,
      password: this.myForm.controls['password'].value
    }

    this.authService.login(userLogin).subscribe({
      next: (token:any) => {
        if(token.message == null){
          this.snackBar.open('Ingreso exitoso!', '', {
            duration: 3000,
          });
          localStorage.setItem('token','Bearer '+ token.access_token);
          localStorage.setItem('isLogged', 'true');
          this.router.navigate(['/enterprise/product/catalog']);
        }
        else{
          this.snackBar.open('Datos incorrectos', '',{
            duration: 3000,
          });
        }
      },
      error: () => {
        this.snackBar.open('Datos incorrectos', '',{
          duration: 3000,
        });
      },
    });

  }

}
