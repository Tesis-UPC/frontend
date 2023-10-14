import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
  {
    path:'shopping-cart', component:ShoppingCartComponent
  },
  {
    path:'catalog', component:CatalogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
