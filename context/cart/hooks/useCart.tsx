import { CartState } from "../../../types/cart";
import { ProductType } from "../../../types/product";
import { CartActions } from "../actions";
import { useCartContext } from "../context";

export const useCart = () => {
  const { state, dispatch } = useCartContext();

  const onAdd = (product: ProductType) => {
    dispatch(CartActions.add(product));
  };
  const onInc = (id: number) => {
    dispatch(CartActions.inc(id));
  };
  const onDec = (id: number) => {
    dispatch(CartActions.dec(id));
  };
  const onRemove = (id: number) => {
    dispatch(CartActions.remove(id));
  };
  const onSet = (state: CartState) => {
    dispatch(CartActions.set(state));
  };

  return {
    state,
    onInc,
    onAdd,
    onDec,
    onRemove,
    onSet,
  };
};
