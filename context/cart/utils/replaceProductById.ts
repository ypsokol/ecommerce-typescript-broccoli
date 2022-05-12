import { CartItemType, CartState } from "../../../types/cart";

export function replaceProductById(
  list: CartState,
  id: number,
  replacer: (cartItem: CartItemType) => CartItemType
): CartState {
  const nextState = [...list];
  const replaceIndex = nextState.findIndex((el) => el.id === id);
  if (replaceIndex !== undefined) {
    nextState[replaceIndex] = replacer(nextState[replaceIndex]);
  }
  return nextState;
}
