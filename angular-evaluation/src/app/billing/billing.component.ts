import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ProductsDetails } from '../services/all-products.service';
import { Products } from '../models/purchasedProducts.model';
import { UserDetails } from '../services/users.service';


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
  noProductsPurchased: boolean = false;
  showTotalAmount: boolean = false;
  showProduct: boolean[] = [false];
  showOptionsForAdd: boolean = false;

  searchProduct: string = "";
  userOption: number = 0;
  indexOfPrice: number = 0;
  singleProductPrice: number | undefined = 0;

  @ViewChild('productId')
  productIdInputElement: ElementRef;

  @ViewChild('quantity')
  quantityInputElement: ElementRef;

  productDetailService: ProductsDetails = inject(ProductsDetails);
  userService: UserDetails = inject(UserDetails);

  allProducts: Products[] = this.productDetailService.productDetails;
  purchasedProducts = this.productDetailService.purchasedProducts;

  ngDoCheck() {
    for (let product of this.allProducts)
      this.price.set(product.productId, product.price);
    this.purchasedProducts = this.productDetailService.purchasedProducts;
  }
  allPrices: number[] = [];

  // purchasedProducts: { productId: string, quantity: number, price: number, quantitativePrice: number }[] = [];

  totalBill: number = 0;
  showProductSpan: boolean = false;

  hasProduct(productName: string, productId: number): boolean {
    console.log(this.searchProduct);

    if (productName.toLocaleLowerCase().includes(this.searchProduct.toLocaleLowerCase()) && this.searchProduct.length != 0 || productId.toString().includes(this.searchProduct))
      return true;
    else
      return false;
  }

  calculateBill() {
    if (this.purchasedProducts.length == 0)
      this.noProductsPurchased = true;
    else {
      this.totalBill = 0;
      for (let product of this.purchasedProducts)
        this.totalBill += product.quantitativePrice;
      console.log(this.totalBill);
      this.resetError();
      this.showTotalAmount = true;
    }
  }

  addProduct(productId: HTMLInputElement, quantity: HTMLInputElement) {

    this.alreadyExistingInCard(productId.value);

    this.singleProductPrice = this.price.get(parseInt(productId.value));

    this.indexOfPrice = this.allProducts.findIndex(
      e => e.productId == parseInt(productId.value)
    )

    if (!this.price.has(parseInt(productId.value))) {
      this.productIdNotFound = true;
      console.log(this.price);

    }
    else if (isNaN(parseInt(quantity.value))) {
      this.invalidQuantity1 = true;
    }
    else if (parseInt(quantity.value) < 1) {
      this.invalidQuantity2 = true;
    }
    else if (this.allProducts[this.indexOfPrice].stock - parseInt(quantity.value) < 0) {
      this.invalidQuantity3 = true;
    }
    else if (this.showOptionsForAdd) {
      console.log("In already Existing");
    }
    else {
      this.productIdNotFound = false;
      this.invalidQuantity1 = false;
      this.invalidQuantity2 = false;
      this.invalidQuantity3 = false;
      this.addingProduct(productId, quantity, 1);
    }
  }

  addingProduct(productId: HTMLInputElement, quantity: HTMLInputElement, userOption: number) {

    this.allProducts[this.indexOfPrice].stock -= parseInt(quantity.value);

    if (this.allProducts.find(e => e.productId == parseInt(productId.value)).discount && this.userService.currentUser.length != 0)
      this.singleProductPrice = (1 - this.allProducts.find(e => e.productId == parseInt(productId.value)).discount) * this.singleProductPrice;
      
    if (userOption == 1) {
      if (this.singleProductPrice)
        this.allPrices.push(this.singleProductPrice * parseInt(quantity.value));

      this.productDetailService.purchasedProduct({ productId: parseInt(productId.value), quantity: parseInt(quantity.value), price: this.singleProductPrice, quantitativePrice: this.allPrices[this.allPrices.length - 1]}); 
    }

    else {
      let mergingProduct = this.purchasedProducts.findIndex(e => e.productId == parseInt(productId.value));
      this.purchasedProducts[mergingProduct].quantity += parseInt(quantity.value);
      this.purchasedProducts[mergingProduct].quantitativePrice = this.singleProductPrice * this.purchasedProducts[mergingProduct].quantity;
    }
    this.showProductAdded();
    this.showOptionsForAdd = false;
    console.log(this.purchasedProducts);
    console.log(this.productDetailService.purchasedProduct);
    
  }

  alreadyExistingInCard(productId: string): boolean {
    if (this.purchasedProducts.filter(e => e.productId == parseInt(productId)).length > 0) {
      this.showOptionsForAdd = true;
      return true;
    }
    else {
      this.showOptionsForAdd = false;
      return false;
    }
  }

  validateUserOption(userOption: number) {
    if (userOption == 1) {
      this.userOption = userOption;
      return true;
    }
    else {
      this.userOption = userOption;
      return false;
    }
  }

  showProductAdded() {
    this.quantityInputElement.nativeElement.value = "";
    this.productIdInputElement.nativeElement.value = "";
    this.showProductSpan = true;
  }

  deletePurchasedProduct(productId : number){
    let index : number = this.productDetailService.purchasedProducts.findIndex(e => e.productId);
    this.productDetailService.purchasedProducts.splice(index-1,1);
    this.calculateBill();
  }

  resetError() {
    this.productIdNotFound = false;
    this.invalidQuantity1 = false;
    this.invalidQuantity2 = false;
    this.invalidQuantity3 = false;
    this.showProductSpan = false;
    this.noProductsPurchased = false;
    this.showTotalAmount = false;
  }
}