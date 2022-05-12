import Routes from "../../../constants/routes";
import Link from "@mui/material/Link";
import NextLink from "next/link";

const Guest = () => (
  <NextLink href={Routes.login} passHref>
    <Link>Login</Link>
  </NextLink>
);

export default Guest;
