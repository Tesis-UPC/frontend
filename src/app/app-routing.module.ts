import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'enterprise',
    loadChildren: () =>
      import('./modules/enterprise/enterprise.module').then(
        (m) => m.EnterpriseModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path: '',
    redirectTo: 'enterprise',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
