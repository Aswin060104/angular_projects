import { Component, Input } from '@angular/core';
import { Laptop } from '../Models/laptop';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() laptop : Laptop[];

  
}
