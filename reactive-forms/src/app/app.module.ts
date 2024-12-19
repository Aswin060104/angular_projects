import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BillingComponent } from './billing/billing.component';
import { Products } from './models/purchasedProducts.model';
import { ProductsDetails } from './services/all-products.service';

@NgModule({
  declarations: [
    AppComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ProductsDetails
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
