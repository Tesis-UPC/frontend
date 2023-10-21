import { ProductOrder } from "./product";

export interface Order{
  shippingAddress: string;
  cardNumber: string;
  cvv: string;
  fvv: string;
  products: ProductOrder[];
}

export interface OrderView{
  id: string;
  paymentMethod: string;
  shippingAddress: string;
  productsPrice: number;
  deliveryCost: number;
  finalPrice: number;
  createdAt: Date;
  details: OrderDetail[];
}

export interface OrderDetail{
  product: string;
  quantity: number;
  pricePerUnit: number;
  totalPrice: number;
}
