import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/interfaces/product';
import { BuyDialogComponent } from '../buy-dialog/buy-dialog.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  productsCart:Product[];
  totalCost:number;
  quantity:number;
  constructor(
    public dialog: MatDialog
    ){
    const cartProductsJSON = localStorage.getItem('cartProducts');
    this.productsCart = cartProductsJSON ? JSON.parse(cartProductsJSON) : [];;
    this.totalCost = 0;
    this.quantity = 0;
    this.calculateTotal();
  }

  addProduct(product: Product){
    product.quantity++;
    this.calculateTotal();
  }

  removeProduct(product: Product){
    if(product.quantity>=1)
    product.quantity--
    this.calculateTotal();
  }

  calculateTotal(){
    this.totalCost = 0;
    this.productsCart.forEach(product => {
      this.totalCost = this.totalCost + (product.price*product.quantity);
    })
    this.quantity = this.productsCart.length;
  }

  delete(productFind:Product){
    const index = this.productsCart.findIndex(product => product.id === productFind.id);
    if (index !== -1)
    {
      this.productsCart.splice(index, 1);
      localStorage.setItem('cartProducts', JSON.stringify(this.productsCart));
    }
    this.calculateTotal();
  }

  openDialog(){
    this.dialog.open(BuyDialogComponent);
  }
}
