import { Reducer, useReducer } from "react";
import { UserType } from "../../types/user";
import { Action, ActionType } from "./actions";
import { initialState } from "./context";

export type UserReducer = Reducer<UserType, Action>;

export const reducer: UserReducer = (
	prevState: UserType,
	action: Action
): UserType => {
	switch (action.type) {
		case ActionType.login:
			return action.payload;
		case ActionType.logout:
			return {} as UserType;
	}
};

export function useUserReducer() {
	return useReducer(reducer, initialState);
}
