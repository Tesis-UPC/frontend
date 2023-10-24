import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { LoginModelComponent } from '../../auth/login-model/login-model.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {

  cartProducts: Product[];
  products: Product[] = [];

  constructor(
    public dialog: MatDialog,
    private productSevice: ProductService
  ){
    this.cartProducts = [];
    this.getProducts();
  }

  getProducts(){
    this.productSevice.getProducts().subscribe((products:Product[]) =>
      this.products = products
    );
  }


  addProduct(product: Product){
    product.quantity++;
  }

  removeProduct(product: Product){
    if(product.quantity>=1)
    product.quantity--
  }

  openDialog(product:Product): void {
    if(localStorage.getItem('isLogged')!= 'true')
      this.dialog.open(LoginModelComponent);
    else{
      const cartProductsJSON = localStorage.getItem('cartProducts');
      this.cartProducts = cartProductsJSON ? JSON.parse(cartProductsJSON) : [];
      const existingProductIndex = this.cartProducts.findIndex(p => p.id === product.id);
      if (existingProductIndex !== -1) {
        this.cartProducts.splice(existingProductIndex, 1);
      }
      this.cartProducts.push(product);
      localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
    }
  }

}
