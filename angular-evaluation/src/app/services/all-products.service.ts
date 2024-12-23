import { Products } from "../models/purchasedProducts.model";

export class ProductsDetails{
    productDetails : Products[] = [
        new Products(5001,"Laptop",20000,7,20),
        new Products(5002,"Mobile Phone",6500,10,35),
        new Products(5003,"Charger",1750,20),
        new Products(5004,"Mouse",320,40),
        new Products(5005,"Monitor",7600,15),
    ]

    purchasedProduct : {productId: number, quantity: number, price: number, quantitativePrice: number}[] = [
       
    ];

    addProduct(newProduct : Products) : boolean{
        this.productDetails.push(newProduct);
        return false;
    }

    updateProduct(updatedProduct : Products) {
        let updatingProduct : Products = this.productDetails.find( e => e.productId == updatedProduct.productId);
        console.log(updatedProduct);
        updatingProduct.name = updatedProduct.name;
        updatingProduct.price = updatedProduct.price;
        updatingProduct.stock = updatedProduct.stock;
        updatingProduct.discount = updatedProduct.discount;
        console.log(updatingProduct);
        
    }

    purchasedProducts({productId, quantity, price, quantitativePrice }){
        this.purchasedProduct.push({productId: productId, quantity: quantity, price: price, quantitativePrice: quantitativePrice});
    }
}