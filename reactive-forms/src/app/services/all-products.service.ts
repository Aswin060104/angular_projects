import { Products } from "../models/purchasedProducts.model";

export class ProductsDetails{
    productDetails : Products[] = [
        new Products(5001,"Laptop",20,7,0.2),
        new Products(5002,"Mobile Phone",20,10,0.35),
        new Products(5003,"Charger",20,20),
        new Products(5004,"Mouse",20,40),
        new Products(5005,"Monitor",20,15),
    ]
}

