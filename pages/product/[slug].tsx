import { Box, Grid, Link, Typography } from "@mui/material";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ProductType } from "../../types/product";
import client from "../../utils/client";
import NextLink from "next/link";
import { classes } from "../../utils/classes";
import { useCart } from "../../context/cart/hooks/useCart";
import { useRouter } from "next/router";
import Routes from "../../constants/routes";
import Images from "../../component/Product/Images";
import Info from "../../component/Product/Info";
import Checkout from "../../component/Product/Checkout";

type Props = {
  product: ProductType;
};

const Product: NextPage<Props> = ({ product }) => {
  const router = useRouter();
  const { onAdd } = useCart();

  const handleAddToCart = () => {
    onAdd(product);
    router.push(Routes.cart);
  };

  return (
    <>
      <Box>
        <Box sx={classes.section}>
          <NextLink href="/" passHref>
            <Link>
              <Typography>back to result</Typography>
            </Link>
          </NextLink>
        </Box>
        <Grid container spacing={1}>
          <Images product={product} />
          <Info product={product} />
          <Checkout product={product} onAddToCart={handleAddToCart} />
        </Grid>
      </Box>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;
  const products = await client.fetch(query);
  const paths = products.map((product: ProductType) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return { paths, fallback: "blocking" };
};

// @ts-ignore
export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const productQuery = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(productQuery);

  return {
    props: { product },
  };
};

export default Product;
