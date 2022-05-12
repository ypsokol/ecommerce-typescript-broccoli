import { FC, ReactNode } from "react";
import { UserContext } from "./context";
import { useUserReducer } from "./reducer";
import { useLocalEffect } from "./hooks/useLocalEffect";

type Props = {
  children: ReactNode;
};

export const UserProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useUserReducer();
  useLocalEffect(state);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
