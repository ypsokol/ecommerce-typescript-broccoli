import Grid from "@mui/material/Grid";

import type { GetServerSideProps, NextPage } from "next";

import Product from "../component/Product";
import { ProductType } from "../types/product";
import client from "../utils/client";

type Props = {
  products: ProductType[];
};

const Home: NextPage<Props> = ({ products }) => {
  return (
    <>
      <Grid container spacing={3}>
        {products?.length > 0 &&
          products.map((product) => (
            <Grid key={product._id} item md={4}>
              <Product product={product} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const productsQuery = `*[_type == "product"]`;
  const products = await client.fetch(productsQuery);
  return { props: { products } };
};

export default Home;
