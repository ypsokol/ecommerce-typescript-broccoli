import Cookies from "js-cookie";
import { Context, createContext, Dispatch, useContext } from "react";
import { CartState } from "../../types/cart";
import { Action } from "./actions";

const cartCookies = Cookies.get("cart");
export const initialState: CartState = (cartCookies ? JSON.parse(cartCookies) : [] as CartState);

export type DispatchCart = Dispatch<Action>;
export type CartContextType = {
	state: CartState;
	dispatch: DispatchCart;
};
export const dispatchInitialState: DispatchCart = () => undefined;

export const CartContext: Context<CartContextType> =
	createContext<CartContextType>({
		state: initialState,
		dispatch: dispatchInitialState,
	});

export function useCartContext() {
	return useContext(CartContext);
}
