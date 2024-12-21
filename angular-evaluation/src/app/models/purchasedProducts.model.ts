export class Products {
    productId: number;
    name : string;
    price: number;
    stock: number;
    discount?: number;

    constructor(productId: number, name: string, price: number, stock: number, discount?: number) {
        this.productId = productId;
        this.name = name;
        this.price = price;
        this.stock = stock;
        if (discount)
            this.discount = discount / 100;
    }
}