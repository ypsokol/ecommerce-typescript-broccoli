import { FC, ReactNode } from "react";
import { ThemeContext } from "./context";
import { useThemeReducer } from "./reducer";

type Props = {
    children: ReactNode
}

//TODO: fix the typescript error!

export const ThemeProvider: FC<Props> = ({children}) => {
	const [state, dispatch] = useThemeReducer();
    
	return (
		<ThemeContext.Provider value={{state, dispatch}}>
			{children}
		</ThemeContext.Provider>
	);
};
