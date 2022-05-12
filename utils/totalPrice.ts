import { CartState } from "../types/cart";

export const totalPrice = (state: CartState) =>
  state.reduce((a, c) => a + c.quantity * c.product.price, 0);
