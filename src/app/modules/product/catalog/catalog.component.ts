import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { LoginModelComponent } from '../../auth/login-model/login-model.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {

  cartProducts: Product[];

  constructor(
    public dialog: MatDialog
  ){
    this.cartProducts = [];
  }

  products: Product[] = [
    {id:'abc-efg-12a', name: 'Almendras (200g)', price: 10.00, type: '', unitMeasure:'', description: '', quantity:0, imageUrl:'../../../../assets/products/almendras_tazon.png'},
    {id:'abc-efg-12b', name: 'Nueces (200g)', price: 8.00, type: '', unitMeasure:'', description: '', quantity:0, imageUrl:'../../../../assets/products/nueces_tazon.png'},
    {id:'abc-efg-12c', name: 'Anacardos (200g)', price: 6.00, type: '', unitMeasure:'', description: '', quantity:0, imageUrl:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:'abc-efg-12d', name: 'Pistachos (200g)', price: 12.00, type: '', unitMeasure:'', description: '', quantity:0, imageUrl:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:'abc-efg-12e', name: 'Avellanas (200g)', price: 10.00, type: '', unitMeasure:'', description: '', quantity:0, imageUrl:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:'abc-efg-12f', name: 'Pasas (200g)', price: 5.00, type: '', unitMeasure:'', description: '', quantity:0, imageUrl:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:'abc-efg-12g', name: 'Macadamias(200g)', price: 16.00, type: '', unitMeasure:'', description: '', quantity:0, imageUrl:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:'abc-efg-12h', name: 'Pecanas(200g)', price: 11.00, type: '', unitMeasure:'', description: '', quantity:0, imageUrl:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:'abc-efg-12i', name: 'Piñones(200g)', price: 14.00, type: '', unitMeasure:'', description: '', quantity:0, imageUrl:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:'abc-efg-12j', name: 'Cacahuates(200g)', price: 5.00, type: '', unitMeasure:'', description: '', quantity:0, imageUrl:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:'abc-efg-12k', name: 'Dátiles(200g)', price: 6.00, type: '', unitMeasure:'', description: '', quantity:0, imageUrl:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'}
  ];

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
      const existingProductIndex = this.cartProducts.findIndex(p => p.id === product.id);
      if (existingProductIndex !== -1) {
        this.cartProducts.splice(existingProductIndex, 1);
      }
      this.cartProducts.push(product);
      localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
    }
  }

}
