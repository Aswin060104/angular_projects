import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './services/admin/admin.component';
import { UserComponent } from './services/user/user.component';
import { ServicesComponent } from './services/services.component';
import { AppComponent } from './app.component';

const routes: Routes = [
 
  { path : "course", component : ProductComponent},
  { path : "details", component : ServicesComponent},
  { path : "register", component : UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
