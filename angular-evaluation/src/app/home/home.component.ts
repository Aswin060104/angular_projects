import { Component, inject } from '@angular/core';
import { UserDetails } from '../services/users.service';
import { ProductsDetails } from '../services/all-products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  userService : UserDetails = inject(UserDetails);
  productDetailService : ProductsDetails = inject(ProductsDetails);

  ngOnInit(){
    this.userService.currentUser = "";
    this.productDetailService.purchasedProducts = [];
  }
}
