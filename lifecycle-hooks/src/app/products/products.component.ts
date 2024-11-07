import { Component, inject } from '@angular/core';
import { Laptop } from '../Models/laptop';
import { productDetails } from '../services/productDetails.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  laptopDetails = inject(productDetails);

  laptop : Laptop[] = this.laptopDetails.getProductDetails();

  selectedPrice : number = 100;
}
