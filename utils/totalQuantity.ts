import { CartState } from "../types/cart";

export const totalQuantity = (state: CartState) =>
  state.length > 0 && state.reduce((a, c) => a + c.quantity, 0);
