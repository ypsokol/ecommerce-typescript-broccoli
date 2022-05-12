import Image from "next/image";
import { FC } from "react";
import { urlFor } from "../../utils/image";
import { Grid } from "@mui/material";
import { ProductType } from "../../types/product";

type Props = {
  product: ProductType;
};

const Images: FC<Props> = ({ product: { name, image } }) => {
  return (
    <Grid item md={6} xs={12}>
      <Image
        src={urlFor(image)}
        alt={name}
        layout="responsive"
        width={640}
        height={640}
      />
    </Grid>
  );
};

export default Images;
