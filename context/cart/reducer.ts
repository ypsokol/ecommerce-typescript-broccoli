import { Reducer, useReducer } from "react";
import { toast } from "react-toastify";
import { CartItemType, CartState } from "../../types/cart";
import { Action, ActionType } from "./actions";
import { initialState } from "./context";
import { replaceProductById } from "./utils/replaceProductById";

type ReducerType = Reducer<CartState, Action>;

export const reducer: ReducerType = (
  prevState: CartState,
  action: Action
): CartState => {
  switch (action.type) {
    case ActionType.set:
      return action.state;
    case ActionType.add:
      const isExist = prevState.find(
        (item) => item.product._id === action.product._id
      );
      if (isExist) {
        return prevState;
      }
      const cart: CartItemType = {
        id: Math.floor(Math.random() * 10000),
        quantity: action.quantity || 1,
        product: action.product,
        timestamp: new Date(),
      };

      toast.success(`Product successfully added to cart!`);
      console.log(cart);

      return [...prevState, cart];
    case ActionType.remove:
      return prevState.filter((item) => item.id !== action.id);
    case ActionType.decQuantity:
      return replaceProductById(prevState, action.id, (item) => ({
        ...item,
        quantity: item.quantity-- || 1,
      }));
    case ActionType.incQuantity:
      return replaceProductById(prevState, action.id, (item) => ({
        ...item,
        quantity: item.quantity++,
      }));
  }
};

export function useCartReducer() {
  return useReducer(reducer, initialState);
}
