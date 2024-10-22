import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { FilterComponent } from './product/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './product/search-bar/search-bar.component';
import { ServicesComponent } from './services/services.component';
import { AdminComponent } from './services/admin/admin.component';
import { UserComponent } from './services/user/user.component';
import { dataStorageService } from './services/dataStorageService/dataStorage.service';
import { NavbarComponent } from './navbar/navbar.component';

export const ds = new InjectionToken<dataStorageService>('dataStorage');

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    FilterComponent,
    SearchBarComponent,
    ServicesComponent,
    AdminComponent,
    UserComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // providers : [dataStorageService
  //   //{provide : ds, useClass : dataStorageService}
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }