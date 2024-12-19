import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillingComponent } from './billing/billing.component';
import { ProductsDetails } from './services/all-products.service';

@NgModule({
  declarations: [
    AppComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProductsDetails
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
