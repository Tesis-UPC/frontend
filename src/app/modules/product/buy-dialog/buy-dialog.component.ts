import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buy-dialog',
  templateUrl: './buy-dialog.component.html',
  styleUrls: ['./buy-dialog.component.scss']
})
export class BuyDialogComponent {
  myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
  ){
    this.reactiveForm();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      cardNumber: ['', [Validators.required]],
      cvv: ['', [Validators.required]],
      fvv: ['', [Validators.required]],
    });
  }
}
