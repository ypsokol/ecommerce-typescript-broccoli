import { FC } from "react";
import { Button, Card, Grid, List, ListItem, Typography } from "@mui/material";
import { ProductType } from "../../types/product";

type Props = {
  product: ProductType;
  onAddToCart: () => void;
};
const Checkout: FC<Props> = ({ product, onAddToCart }) => {
  return (
    <Grid item md={3} xs={12}>
      <Card>
        <List>
          <ListItem>
            <Grid container>
              <Grid item xs={6}>
                <Typography>Price</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>${product.price}</Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid container>
              <Grid item xs={6}>
                <Typography>Status</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>
                  {product.countInStock > 0 ? "In Stock" : "Unavailable"}
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Button onClick={onAddToCart} fullWidth variant="contained">
              Add to cart
            </Button>
          </ListItem>
        </List>
      </Card>
    </Grid>
  );
};

export default Checkout;
