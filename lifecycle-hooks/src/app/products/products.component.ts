import { Component, inject } from '@angular/core';
import { Laptop } from '../Models/laptop';
import { ProductDetails } from '../services/productDetails.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  laptopDetails = inject(ProductDetails);

  laptop : Laptop[] = this.laptopDetails.getProductDetails();

  selectedPrice : number = 100;
}
