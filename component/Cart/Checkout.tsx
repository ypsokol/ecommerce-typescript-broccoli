import { Button, Card, List, ListItem, Typography } from "@mui/material";
import { FC } from "react";

import { useCart } from "../../context/cart/hooks/useCart";
import { useCartCheckout } from "../../context/cart/hooks/useCartCheckout";

import { totalQuantity } from "../../utils/totalQuantity";
import { totalPrice } from "../../utils/totalPrice";

const Checkout: FC = () => {
  const { state } = useCart();
  const { onCheckout } = useCartCheckout(state);

  return (
    <Card>
      <List>
        <ListItem>
          <Typography variant="h2">
            Subtotal ({totalQuantity(state)} items) : $ {totalPrice(state)}
          </Typography>
        </ListItem>
        <ListItem>
          <Button
            fullWidth
            color="primary"
            variant="contained"
            onClick={onCheckout}
          >
            Checkout
          </Button>
        </ListItem>
      </List>
    </Card>
  );
};

export default Checkout;
