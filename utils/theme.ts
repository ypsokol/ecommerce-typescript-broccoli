import { createTheme } from "@mui/material";
import { Color } from "./colors";

export const theme = (dark: boolean = false) => createTheme({
    components: {
        MuiLink: {
            defaultProps: {
                underline: "hover"
            }
        }
    },
    typography: {
        h1: {
            fontSize: "1.6rem",
            fontWeight: 400,
            margin: "1rem 0",
        },
        h2: {
            fontSize: "1.4rem",
            fontWeight: 400,
            margin: "1rem 0",
        },
    },
    palette: {
        mode: dark ? "dark" : "light",
        primary: {
            main: Color.primary.main,
        },
        secondary: {
            main: Color.secondary.main,
        },
    },
});