import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ProductsDetails } from '../services/all-products.service';
import { Products } from '../models/purchasedProducts.model';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent {
  price = new Map<number, number>;

  productIdNotFound: boolean = false;
  invalidQuantity1: boolean = false;
  invalidQuantity2: boolean = false;
  invalidQuantity3: boolean = false;

  @ViewChild('productId')
  productIdInputElement: ElementRef;

  @ViewChild('quantity')
  quantityInputElement: ElementRef;

  productDetailService : ProductsDetails = inject(ProductsDetails);

  allProducts : Products[] = this.productDetailService.productDetails;

  ngDoCheck() {
    for(let product of this.allProducts)
      this.price.set(product.productId, product.price);
  }
  allPrices: number[] = [];

  purchasedProducts: { productId: string, quantity: string,price: number, quantitativePrice: number}[] = [];

  totalBill: number = 0;
  showProductSpan: boolean = false;

  calculateBill() {
    this.totalBill = 0;
    for (let price of this.allPrices)
      this.totalBill += price;
    console.log(this.totalBill);
  }
  
  addProduct(productId: HTMLInputElement, quantity: HTMLInputElement) {
    let singleProductPrice: number | undefined = this.price.get(parseInt(productId.value));

    let indexOfPrice : number = this.allProducts.findIndex(
      e => e.productId == parseInt(productId.value)
    )

    if (!this.price.has(parseInt(productId.value))) {
      this.productIdNotFound = true;
    }
    else if (isNaN(parseInt(quantity.value)))  {
      this.invalidQuantity1 = true;
    }
    else if(parseInt(quantity.value) < 1){
      this.invalidQuantity2 = true;
    }
    else if(this.allProducts[indexOfPrice].stock - parseInt(quantity.value) < 0){
      this.invalidQuantity3 = true;
    }
    else {
      this.productIdNotFound = false;
      this.invalidQuantity1 = false;
      this.invalidQuantity2 = false;
      this.invalidQuantity3 = false;

      if(this.allProducts.find( e => e.productId == parseInt(productId.value)).discount)
        singleProductPrice = (1 - this.allProducts.find( e => e.productId == parseInt(productId.value)).discount) * singleProductPrice ;

      console.log("Discount " + this.allProducts.find( e => e.productId == parseInt(productId.value)).discount);
      

      this.allProducts[indexOfPrice].stock -= parseInt(quantity.value);
      if (singleProductPrice)
        this.allPrices.push(singleProductPrice * parseInt(quantity.value));

      console.log(this.allPrices);
      
      console.log(singleProductPrice);

      this.purchasedProducts.push({ productId: productId.value, quantity: quantity.value, price: singleProductPrice, quantitativePrice: this.allPrices[this.allPrices.length - 1] });
      this.showProductAdded();

      console.log(this.purchasedProducts);
      console.log(this.allProducts);
      
    }
  }

  showProductAdded() {
    this.quantityInputElement.nativeElement.value = "";
    this.productIdInputElement.nativeElement.value = "";
    this.showProductSpan = true;
    setTimeout(() => {
      this.showProductSpan = false;
    }, 1000);
  }
}