import Client from "./Client";
import OrderItem from "./OrderItem";

export default class Order {
  client: Client;
  items: OrderItem[];
  paymentMethod: string;
  discount: number;

  constructor(
    client: Client,
    items: OrderItem[],
    paymentMethod: string,
    discount: number = 0,
  ) {
    this.client = client;
    this.items = items;
    this.paymentMethod = paymentMethod;
    this.discount = discount;
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getTotalPriceWithDiscount(): number {
    return this.getTotalPrice() * (1 - this.discount);
  }
}
