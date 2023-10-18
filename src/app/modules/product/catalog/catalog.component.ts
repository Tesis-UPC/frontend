import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  products: Product[] = [
    {id:1, name: 'Producto 1', price: 10, image:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:1, name: 'Producto 1', price: 10, image:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:1, name: 'Producto 1', price: 10, image:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:1, name: 'Producto 1', price: 10, image:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:1, name: 'Producto 1', price: 10, image:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:1, name: 'Producto 1', price: 10, image:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:1, name: 'Producto 1', price: 10, image:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:1, name: 'Producto 1', price: 10, image:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'},
    {id:1, name: 'Producto 1', price: 10, image:'https://wallpaperswide.com/download/apple_black_products-wallpaper-1920x1200.jpg'}
  ];


}
