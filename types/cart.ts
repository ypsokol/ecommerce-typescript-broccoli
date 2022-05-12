import { ProductType } from "./product";

export type CartItemType = {
  product: ProductType;
  quantity: number;
  id: number;
  timestamp: Date;
};

export type CartState = CartItemType[];
