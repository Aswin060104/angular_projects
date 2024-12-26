import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillingComponent } from './billing/billing.component';
import { ProductsDetails } from './services/all-products.service';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UserDetails } from './services/users.service';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BillingComponent,
    NavigationBarComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ProductsDetails,
    UserDetails,
    Router
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
