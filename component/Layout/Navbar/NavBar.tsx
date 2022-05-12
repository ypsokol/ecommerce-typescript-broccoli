import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import { FC, lazy, Suspense } from "react";
import NextLink from "next/link";
import { classes } from "../../../utils/classes";
import ThemeSwitcher from "../../ThemeSwitcher";
import { useUser } from "../../../context/user/hooks/useUser";
import Routes from "../../../constants/routes";

const Guest = lazy(() => import("./Guest"));
const User = lazy(() => import("./User"));

//TODO: User checking fails hydration

const NavBar: FC = () => {
  const { isUser } = useUser();

  return (
    <AppBar position="static" sx={classes.appbar}>
      <Toolbar sx={classes.toolbar}>
        <Box display="flex" alignItems="center">
          <NextLink href="/" passHref>
            <Link>
              <Typography>YPSOKOL</Typography>
            </Link>
          </NextLink>
        </Box>

        <Box>
          <ThemeSwitcher />
        </Box>
        <NextLink href={Routes.cart} passHref>
          <Link>Cart</Link>
        </NextLink>
        <Suspense fallback={<h1>Loading...</h1>}>
          {isUser ? <User /> : <Guest />}
        </Suspense>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
