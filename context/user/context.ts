import Cookies from "js-cookie";
import { Context, createContext, Dispatch, useContext } from "react";
import { UserType } from "../../types/user";
import { Action } from "./actions";

export type DispatchUser = Dispatch<Action>;
export type UserContextState = {
	state: UserType;
	dispatch: DispatchUser;
};

const userCookies = Cookies.get("user");
export const initialState: UserType = userCookies ? JSON.parse(userCookies) : {} as UserType;
export const dispatchInitialState: DispatchUser = () => undefined;

export const UserContext: Context<UserContextState> =
	createContext<UserContextState>({
		state: initialState,
		dispatch: dispatchInitialState,
	});

export function useUserContext() {
	return useContext(UserContext);
}
