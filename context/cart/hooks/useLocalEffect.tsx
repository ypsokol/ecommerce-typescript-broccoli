import Cookies from "js-cookie";
import { useEffect } from "react";
import { CartState } from "../../../types/cart";

export function useLocalEffect(state: CartState) {
  const key = "cart";

  useEffect(() => {
    const stringified = JSON.stringify(state);
    Cookies.set(key, stringified);
  }, [state, key]);
}
