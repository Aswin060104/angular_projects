import { Component } from '@angular/core';
import { Laptop } from '../Models/laptop';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  laptop : Laptop[] = [
    {name : "Asus-Vivobook", price : 95000, discount : 0.10, discountPercentage : "10%", imgLoc : "assets/images/asus-vivobook.png", stockAvailable : new Date(2024,11,24), description : "A laptop is a portable computer with a built-in screen, keyboard, and battery, used for work, gaming, or browsing gaming, or browsing.."},
    {name : "Lenovo", price : 67000, imgLoc : "assets/images/lenovo.png", description : "A laptop is a portable computer with a built-in screen, keyboard, and battery, used for work, gaming, or browsing."},
    {name : "Dell", price : 38000, imgLoc : "assets/images/dell.png",stockAvailable : new Date(2024,10,14), description : "A laptop is a portable computer with a built-in screen, keyboard, and battery, used for work, gaming, or browsing."},
    {name : "HP Pavilion", price : 38000, discount : 0.20, discountPercentage : "20%", imgLoc : "assets/images/hp-pavilion-360.png", description : "A laptop is a portable computer with a built-in screen, keyboard, and battery, used for work, gaming, or browsing."},
    {name : "ASUS", price : 56000,discount : 0.15, discountPercentage : "15%", imgLoc : "assets/images/asus.png", description : "A laptop is a portable computer with a built-in screen, keyboard, and battery, used for work, gaming, or browsing."},
  ]

  selectedPrice : number = 100;
}
