import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component:MainComponent,
    children: [
      {
        path:'about-us', component: AboutUsComponent
      },
      {
        path:'contact', component: ContactComponent
      },
      {
        path:'home', component: HomeComponent
      },
      {
        path: 'product',
        loadChildren: () =>
          import('../product/product.module').then(
            (m) => m.ProductModule
          ),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: () =>
    import('../auth/auth.module').then(
      (m) => m.AuthModule
    ),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterpriseRoutingModule { }
