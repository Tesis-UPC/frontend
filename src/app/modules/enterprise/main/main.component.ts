import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnDestroy, OnInit {
 mobileQuery: MediaQueryList;
 isLogged: string| null = '';


  fillerNav = [
    {name: 'Inicio', route: 'home', icon:'home'},
    {name: 'Nosotros', route: 'about-us', icon:'group'},
    {name: 'Productos', route: 'product/catalog', icon:'category'},
    {name: 'Contacto', route: 'contact', icon:'badge'},
    {name: 'Login', route: '../auth/login', icon:'person'},
  ];

  fillerNavScreen = [
    {name: 'Inicio', route: 'home', icon:'home'},
    {name: 'Nosotros', route: 'about-us', icon:'group'},
    {name: 'Productos', route: 'product/catalog', icon:'category'},
    {name: 'Contacto', route: 'contact', icon:'badge'},
  ];

  fillerLoginNav = [
    {name: 'Productos', route: 'product/catalog', icon:'category'},
    {name: 'Carrito', route: 'product/cart', icon:'shopping_cart'},
    {name: 'Perfil', route: 'auth/profile', icon:'person'},
  ]

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private router: Router,
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    this.isLogged = localStorage.getItem('isLogged');
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  getQuantity(): any{
    const cartProductsJSON = localStorage.getItem('cartProducts');
    let cart = cartProductsJSON ? JSON.parse(cartProductsJSON) : [];
    return cart.length;

  }

  exit(){
    localStorage.clear();
    window.location.href = '/enterprise';
  }

}
