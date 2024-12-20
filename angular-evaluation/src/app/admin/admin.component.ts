import { Component, inject } from '@angular/core';
import { Products } from '../models/purchasedProducts.model';
import { ProductsDetails } from '../services/all-products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  productDetailService : ProductsDetails = inject(ProductsDetails);
  products : Products[] = this.productDetailService.productDetails;

  showAddProduct : boolean = false;
  newProduct : Products  = {
    productId: 0,
    name: '',
    price: 0,
    stock: 0,
    discount: 0,
  };
  editValues(){

  }
  showAddProductInputField(){
    this.newProduct.name = "";
    this.newProduct.price = 0;
    this.newProduct.stock = 0;
    this.newProduct.productId = 0;
    this.showAddProduct = true;
  }
  addProduct(){
    this.newProduct.price = Number(this.newProduct.price);
    this.newProduct.stock = Number(this.newProduct.stock);
    this.newProduct.productId = Number(this.newProduct.productId);
    this.newProduct.discount = Number(this.newProduct.discount)/100;
    this.showAddProduct = true;
    console.log(this.products.filter(e => e.productId == this.newProduct.productId));
    if(this.newProduct.name != "" && this.newProduct.price != 0 && this.newProduct.stock != 0 && 
      this.products.filter(e => e.productId == this.newProduct.productId).length == 0)
    this.showAddProduct = this.productDetailService.addProduct(this.newProduct);
    else
      console.log(this.newProduct);
  }
}
