import { FC, ReactNode } from "react";
import { Container, CssBaseline } from "@mui/material";
import { classes } from "../../utils/classes";
import Theme from "../Theme";
import Header from "./Header/Header";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";

type Props = {
  title?: string;
  description?: string;
  children: ReactNode;
};

const Layout: FC<Props> = ({ title, description, children }) => {
  return (
    <div className="layout-container">
      <Header title={title} description={description} />
      <Theme>
        <CssBaseline />
        <NavBar />
        <Container component="main" sx={classes.main}>
          {children}
        </Container>
        <Footer />
      </Theme>
    </div>
  );
};

export default Layout;
