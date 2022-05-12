import { UserType } from "../../../types/user";
import { UserActions } from "../actions";
import { useUserContext } from "../context";

export const useUser = () => {
  const { state, dispatch } = useUserContext();

  const isUser =
    state && state.constructor === Object && Object.keys(state).length !== 0;

  const onLogin = (user: UserType) => {
    dispatch(UserActions.login(user));
  };

  const onLogout = () => {
    dispatch(UserActions.logout());
  };

  return {
    state,
    isUser,
    onLogin,
    onLogout,
  };
};
