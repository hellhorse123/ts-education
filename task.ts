class Product {
  constructor(public id: number, public title: string, public price: number) {}
}

class Delivery {
  constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
  constructor(date: Date, public address: string) {
    super(date);
  }
}

class ShopDelivery extends Delivery {
  constructor(public shopId: number) {
    super(new Date());
  }
}

type DeliveryOptions = HomeDelivery | ShopDelivery;

class Cart {
  private products: Product[] = [];
  private delivery: DeliveryOptions | undefined;

  public addProduct(product: Product): void {
    this.products.push(product);
  }

  public deleteProduct(productId: number): void {
   this.products = this.products.filter((p: Product) => p.id !== productId);
  }

  public getSum(): number {
    return this.products
      .map((p: Product) => p.price)
      .reduce((p1: number, p2: number) => p1 + p2);
  }

  public setDelivery(delivery: DeliveryOptions): void {
    this.delivery = delivery;
  }

  public checkOut() {
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
