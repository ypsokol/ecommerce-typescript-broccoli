import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Rating, Typography,} from "@mui/material";
import {FC, memo} from "react";
import NextLink from "next/link";
import {ProductType} from "../types/product";
import {urlForThumbnail} from "../utils/image";

type Props = {
    product: ProductType;
};

const Product: FC<Props> = ({product}) => {
    return (
        <Card>
            <NextLink href={`/product/${product.slug.current}`} passHref>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={urlForThumbnail(product.image)}
                        title={product.name}
                    />
                    <CardContent>
                        <Typography>{product.name}</Typography>
                        <Rating value={product.rating} readOnly/>
                        <Typography>({product.numReviews})</Typography>
                    </CardContent>
                </CardActionArea>
            </NextLink>
            <CardActions>
                <Typography>${product.price}</Typography>
                <Button size="small" color="primary">
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    );
};

export default memo(Product);
