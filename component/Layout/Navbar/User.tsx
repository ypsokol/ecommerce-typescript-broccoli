import { Button, Menu, MenuItem } from "@mui/material";
import { classes } from "../../../utils/classes";
import Routes from "../../../constants/routes";
import { FC, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useUser } from "../../../context/user/hooks/useUser";

const User: FC = () => {
  const { state, onLogout } = useUser();
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();

  const handleOnCloseMenu = (redirect: string) => {
    setAnchorEl(null);
    if (redirect) {
      router.push(redirect);
    }
  };

  const handleOnClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const handleOnLogout = () => {
    setAnchorEl(null);
    onLogout();
    Cookies.remove("user");
    Cookies.remove("cart");
    router.push(Routes.home);
  };
  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup
        sx={classes.navbarButton}
        onClick={handleOnClick}
      >
        {state.name}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleOnCloseMenu}
      >
        <MenuItem onClick={() => handleOnCloseMenu(Routes.profile)}>
          Profile
        </MenuItem>
        <MenuItem onClick={handleOnLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default User;
