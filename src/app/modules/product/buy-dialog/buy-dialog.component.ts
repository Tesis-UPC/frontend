import { Order } from './../../../interfaces/order';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product, ProductOrder } from 'src/app/interfaces/product';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-buy-dialog',
  templateUrl: './buy-dialog.component.html',
  styleUrls: ['./buy-dialog.component.scss']
})
export class BuyDialogComponent {
  myForm!: FormGroup;
  productsCart!: Product[];
  productsOrder: ProductOrder[];
  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private snackBar: MatSnackBar
  ){
    this.reactiveForm();
    this.productsOrder = [];
    this.retrieveProducts();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      cardNumber: ['', [Validators.required]],
      cvv: ['', [Validators.required]],
      fvv: ['', [Validators.required]],
      shippingAddress: ['', [Validators.required]],
    });
  }

  retrieveProducts(){
    const cartProductsJSON = localStorage.getItem('cartProducts');
    this.productsCart = cartProductsJSON ? JSON.parse(cartProductsJSON) : [];;
    if(this.productsCart.length>0){
      this.productsOrder = this.productsCart.map(product => ({
        id: product.id,
        quantity: product.quantity
      }));
    }
  }

  buy(){
    const order : Order ={
      shippingAddress: this.myForm.controls['shippingAddress'].value,
      cvv: this.myForm.controls['cvv'].value,
      fvv: this.dateFormat(this.myForm.controls['fvv'].value),
      cardNumber: this.myForm.controls['cardNumber'].value,
      products: this.productsOrder
    }
    this.orderService.create(order).subscribe(()=>{
      this.snackBar.open('Compra realizada con éxito!', '', {
        duration: 3000,
      });
    });
  }

  dateFormat(inputDate: string): string {
    const [month, year] = inputDate.split('/');

    const completeYear = `20${year}`;

    const formattedDate  = `${completeYear}-${month}-01`;

    return formattedDate;
  }
}
