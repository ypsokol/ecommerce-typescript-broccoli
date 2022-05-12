import { FC, ReactNode } from "react";
import { CartContext } from "./context";
import { useLocalEffect } from "./hooks/useLocalEffect";
import { useCartReducer } from "./reducer";

type Props = {
	children: ReactNode;
};

export const CartProvider: FC<Props> = ({ children }) => {
	const [state, dispatch] = useCartReducer();
	useLocalEffect(state);

	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{children}
		</CartContext.Provider>
	);
};
