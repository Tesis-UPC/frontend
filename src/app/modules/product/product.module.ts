import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SharedModule } from '../shared/shared.module';
import { BuyDialogComponent } from './buy-dialog/buy-dialog.component';
import { MmAaFormatDirective } from 'src/app/validators/fvv-validator';


@NgModule({
  declarations: [
    CatalogComponent,
    ShoppingCartComponent,
    BuyDialogComponent,
    MmAaFormatDirective
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
