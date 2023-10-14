import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AboutUsComponent,
    HomeComponent,
    ContactComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    EnterpriseRoutingModule,
    SharedModule
  ]
})
export class EnterpriseModule { }
