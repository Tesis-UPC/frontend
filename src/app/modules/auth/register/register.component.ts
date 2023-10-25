import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClientRegister } from 'src/app/interfaces/client';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ){
    this.reactiveForm();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mail: ['', [Validators.required,Validators.email]],
      address: ['', [Validators.required]],
      password: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required]]
    });
  }

  register(){
    if( this.myForm.controls['password'].value == this.myForm.controls['repeatPassword'].value){
      const client: ClientRegister = {
        email: this.myForm.controls['mail'].value,
        firstName: this.myForm.controls['name'].value,
        lastName: this.myForm.controls['lastName'].value,
        address: this.myForm.controls['address'].value,
        password: this.myForm.controls['password'].value
      }

      this.authService.register(client).subscribe(()=>{
        this.snackBar.open('El usuario fue registrado con exito!', '', {
          duration: 3000,
        });
        this.router.navigate(['/enterprise']);
      })
    }
    else{
      this.snackBar.open('Las contraseñas no coinciden', '', {
        duration: 3000,
      });
    }


  }
}
