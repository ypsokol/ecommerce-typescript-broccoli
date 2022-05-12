import { Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import dynamic from "next/dynamic";

import { useCart } from "../../context/cart/hooks/useCart";
import List from "../../component/Cart/List";
import Checkout from "../../component/Cart/Checkout";
import Empty from "../../component/Cart/Empty";

const Cart: NextPage = () => {
  const { state } = useCart();

  return (
    <>
      <Typography component="h1" variant="h1">
        Shopping Cart
      </Typography>
      {state.length > 0 ? (
        <Grid container>
          <Grid item md={9} xs={12}>
            <List />
          </Grid>
          <Grid item md={3} xs={12}>
            <Checkout />
          </Grid>
        </Grid>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
