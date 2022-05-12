import { FC } from "react";
import { Grid, List, ListItem, Rating, Typography } from "@mui/material";
import { classes } from "../../utils/classes";
import { ProductType } from "../../types/product";

type Props = {
  product: ProductType;
};
const Info: FC<Props> = ({ product }) => {
  return (
    <Grid item md={3} xs={12}>
      <List>
        <ListItem>
          <Typography component="h1" variant="h1">
            {product.name}
          </Typography>
        </ListItem>
        <ListItem>Category: {product.category}</ListItem>
        <ListItem>Brand: {product.brand}</ListItem>
        <ListItem>
          <Rating value={product.rating} readOnly />
          <Typography sx={classes.smallText}>
            {product.numReviews} reviews
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>Description: {product.description}</Typography>
        </ListItem>
      </List>
    </Grid>
  );
};

export default Info;
