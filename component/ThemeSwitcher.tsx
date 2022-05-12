import { Switch } from "@mui/material";
import { FC } from "react";
import { useThemeContext } from "../context/theme/context";
import { ActionType } from "../context/theme/reducer";
import Cookies from "js-cookie";

type Props = {};

const ThemeSwitcher: FC = () => {
	const { state, dispatch } = useThemeContext();

	const handleOnChange = () => {
		dispatch({
			type: state.darkMode
				? ActionType.darkModeOff
				: ActionType.darkModeOn,
		});
		return Cookies.set("darkMode", !state.darkMode ? "ON" : "OFF");
	};
	return <Switch checked={state.darkMode} onChange={handleOnChange} />;
};

export default ThemeSwitcher;
