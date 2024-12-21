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
  editingRowId : number = -1;
  editingRowNumber : number = -1;
  newProduct : Products  = {
    productId: 0,
    name: '',
    price: 0,
    stock: 0,
    discount: 0,
  };

  errorValues = new Map< string, boolean>;

  ngOnInit(){
    this.errorValues.set("errorProductId", false);
    this.errorValues.set("errorProductName",false);
    this.errorValues.set("errorAlreadyExistingProduct",false);
    this.errorValues.set("errorProductPrice",false);
    this.errorValues.set("errorProductStock",false);
    this.errorValues.set("errorProductDiscount",false);
  }

  showAddProductInputField(){
    this.newProduct.name = "";
    this.showAddProduct = true;
  }

  addProduct(){
    this.newProduct.price = Number(this.newProduct.price);
    this.newProduct.stock = Number(this.newProduct.stock);
    this.newProduct.productId = Number(this.newProduct.productId);
    this.newProduct.discount = Number(this.newProduct.discount);
    this.showAddProduct = true;

  let newProductId =this.newProduct.productId;
  let newProductName = this.newProduct.name;
  let newProductPrice = this.newProduct.price;
  let newProductStock = this.newProduct.stock;
  let newProductDiscount : number = this.newProduct.discount;

    if(this.newProduct.productId < 1)
      this.errorValues.set("errorProductId", true);
    else if(this.newProduct.name == "")
      this.errorValues.set("errorProductName",true);    
    else if(this.newProduct.price <= 0)
      this.errorValues.set("errorProductPrice",true);
    else if(this.newProduct.stock < 1)
      this.errorValues.set("errorProductStock",true);
    else if(newProductDiscount < 0 )
      this.errorValues.set("errorProductDiscount",true);
    else if(this.products.filter(e => e.productId == this.newProduct.productId).length != 0)
      this.errorValues.set("errorAlreadyExistingProduct",true);
    else{
      this.newProduct.discount = this.newProduct.discount / 100;
      this.showAddProduct = this.productDetailService.addProduct({productId : newProductId,name: newProductName, price: newProductPrice, stock : newProductStock, discount : newProductDiscount / 100});
      // this.newProduct.price = 0;
      // this.newProduct.productId=0;
      // this.newProduct.name = '';
      // this.newProduct.price =  0;
      // this.newProduct.stock = 0;
      // this.newProduct.discount = 0;
      console.log(this.newProduct);
      console.log(newProductDiscount);
      
    }
    console.log(this.errorValues);
    console.log(this.newProduct);
    console.log(this.newProduct.discount || this.newProduct.discount < 0 ? "true" : "false");
  }

  resetAllError(){
    for(let error of this.errorValues.keys()){
      this.errorValues.set(error,false);
    }
  }

  editProductName : string= "";
  editProductPrice : number = 0;
  editProductStock : number = 0;
  editProductDiscount : number= 0;

  editValues(editingProductId : number, rowNumber : number){

    this.editProductName  = this.products[this.editingRowNumber].name;
    this.editProductPrice  = this.products[this.editingRowNumber].price;
    this.editProductStock = this.products[this.editingRowNumber].stock;
    this.editProductDiscount  = this.products[this.editingRowNumber].stock;
    
    this.editingRowId = editingProductId;
    this.editingRowNumber = rowNumber;
    console.log(editingProductId);
    if(this.products[this.editingRowNumber].discount)
      this.products[this.editingRowNumber].discount *= 100;
  }

  saveEditedValues(){
    if(this.products[this.editingRowNumber].productId < 1)
      this.errorValues.set("errorProductId", true);
    else if(this.products[this.editingRowNumber].name == "")
      this.errorValues.set("errorProductName",true);    
    else if(this.products[this.editingRowNumber].price <= 0)
      this.errorValues.set("errorProductPrice",true);
    else if(this.products[this.editingRowNumber].stock < 1)
      this.errorValues.set("errorProductStock",true);
    else if(this.products[this.editingRowNumber].discount && this.products[this.editingRowNumber].discount < 0)
      this.errorValues.set("errorProductDiscount",true);
    else{
      this.products[this.editingRowNumber].discount /= 100;
      this.productDetailService.updateProduct(this.products[this.editingRowNumber]);
      this.editingRowId = -1;
      this.editingRowNumber = -1;
    }
    console.log(this.errorValues);
    
  }
}
