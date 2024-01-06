"use strict";
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    getSum() {
        return this.products
            .map((p) => p.price)
            .reduce((p1, p2) => p1 + p2);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkOut() {
        if (this.products.length === 0) {
            throw new Error("No products in cart");
        }
        if (!this.delivery) {
            throw new Error("Pick delivery way");
        }
        return { success: true };
    }
}
const cart = new Cart();
cart.addProduct(new Product(1, "cookies", 50));
cart.addProduct(new Product(2, "cake", 1000));
cart.addProduct(new Product(3, "chocolate", 210));
cart.deleteProduct(2);
cart.setDelivery(new HomeDelivery(new Date(), ""));
console.log(cart.getSum());
console.log(cart.checkOut());
console.log(cart);
