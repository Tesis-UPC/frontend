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

  constructor(
    public dialog: MatDialog
  ){

  }

  products: Product[] = [
    {id:1, name: 'Almendras (200g)', price: 10.00, quantity:0, image:'../../../../assets/products/almendras_tazon.png'},
    {id:1, name: 'Nueces (200g)', price: 8.00, quantity:0, image:'../../../../assets/products/nueces_tazon.png'},
    {id:1, name: 'Anacardos (200g)', price: 6.00, quantity:0, image:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:1, name: 'Pistachos (200g)', price: 12.00, quantity:0, image:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:1, name: 'Avellanas (200g)', price: 10.00, quantity:0, image:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:1, name: 'Pasas (200g)', price: 5.00, quantity:0, image:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:1, name: 'Macadamias(200g)', price: 16.00, quantity:0, image:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:1, name: 'Pecanas(200g)', price: 11.00, quantity:0, image:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:1, name: 'Piñones(200g)', price: 14.00, quantity:0, image:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:1, name: 'Cacahuates(200g)', price: 5.00, quantity:0, image:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:1, name: 'Dátiles(200g)', price: 6.00, quantity:0, image:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'}
  ];

  addProduct(product: Product){
    product.quantity++;
  }

  removeProduct(product: Product){
    if(product.quantity>=1)
    product.quantity--
  }

  openDialog(): void {
    this.dialog.open(LoginModelComponent);
  }

}
