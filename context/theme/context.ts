import Cookies from "js-cookie";
import { Context, createContext, Dispatch, useContext } from "react";
import { Action } from "./reducer";

export type ThemeState = {
  darkMode: boolean;
};

export type DispatchTheme = Dispatch<Action>;
export type ThemeContextType = {
  state: ThemeState;
  dispatch: DispatchTheme;
};

export const initialState: ThemeState = {
  darkMode: Cookies.get("darkMode") === "ON",
};
export const dispatchInitialState: DispatchTheme = () => undefined;

export const ThemeContext: Context<ThemeContextType> =
  createContext<ThemeContextType>({
    state: initialState,
    dispatch: dispatchInitialState,
  });

export function useThemeContext() {
  return useContext(ThemeContext);
}
