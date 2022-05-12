import Cookies from "js-cookie";
import { useEffect } from "react";
import { UserType } from "../../../types/user";

export function useLocalEffect(state: UserType) {
  const key = "user";

  useEffect(() => {
    const stringified = JSON.stringify(state);
    Cookies.set(key, stringified);
  }, [state, key]);
}
