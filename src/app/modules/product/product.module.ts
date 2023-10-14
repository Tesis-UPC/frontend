import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    CatalogComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
