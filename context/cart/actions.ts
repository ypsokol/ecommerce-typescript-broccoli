import { CartState } from "../../types/cart";
import { ProductType } from "../../types/product";

export enum ActionType {
  add = "add",
  remove = "remove",
  incQuantity = "incQuantity",
  decQuantity = "decQuantity",
  set = "set",
}

export type Add = {
  type: ActionType.add;
  quantity?: number;
  product: ProductType;
};
export type Remove = {
  type: ActionType.remove;
  id: number;
};
export type Inc = {
  type: ActionType.incQuantity;
  id: number;
};
export type Dec = {
  type: ActionType.decQuantity;
  id: number;
};

export type Set = {
  type: ActionType.set;
  state: CartState;
};

export type Action = Add | Remove | Inc | Dec | Set;

export const CartActions = {
  inc: (id: number): Inc => ({ type: ActionType.incQuantity, id }),
  dec: (id: number): Dec => ({ type: ActionType.decQuantity, id }),
  add: (product: ProductType, quantity?: number): Add => ({
    type: ActionType.add,
    product,
    quantity,
  }),
  remove: (id: number): Remove => ({ type: ActionType.remove, id }),
  set: (state: CartState): Set => ({ type: ActionType.set, state }),
};
