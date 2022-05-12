import { Dispatch, Reducer, useReducer } from "react";
import { initialState, ThemeState } from "./context";

export enum ActionType {
	darkModeOn = "darkModeOn",
	darkModeOff = "darkModeOff",
}

export type On = { type: ActionType.darkModeOn };
export type Off = { type: ActionType.darkModeOff };

export type Action = On | Off;

export type ReducerType = Reducer<ThemeState, Action>;

export const reducer: ReducerType = (
	state: ThemeState,
	action: Action
): ThemeState => {
	switch (action.type) {
		case ActionType.darkModeOn:
			return { ...state, darkMode: true };
		case ActionType.darkModeOff:
			return { ...state, darkMode: false };
		default:
			return state;
	}
};

export function useThemeReducer() {
	return useReducer(reducer, initialState);
}
