export enum ActionType {
	login = "login",
	logout = "logout",
}

export type Login = {
	type: ActionType.login;
	payload: any;
};

export type Logout = {
	type: ActionType.logout;
};

export type Action = Login | Logout;

export const UserActions = {
	login: (payload: any): Login => ({ type: ActionType.login, payload }),
	logout: (): Logout => ({ type: ActionType.logout }),
};
