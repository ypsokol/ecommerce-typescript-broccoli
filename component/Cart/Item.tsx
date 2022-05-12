import { FC, memo } from "react";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Link from "@mui/material/Link";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import NextLink from "next/link";
import Image from "next/image";

import { urlFor } from "../../utils/image";
import { CartItemType } from "../../types/cart";
import { useCart } from "../../context/cart/hooks/useCart";
import { TiDeleteOutline } from "react-icons/ti";

type Props = {
  item: CartItemType;
};

const Item: FC<Props> = ({ item: { id, quantity, product } }) => {
  const { onRemove, onDec, onInc } = useCart();
  const handleOnRemove = () => {
    onRemove(id);
  };
  const handleOnInc = () => {
    onInc(id);
  };
  const handleOnDec = () => {
    onDec(id);
  };

  return (
    <TableRow key={product._id}>
      <TableCell>
        <NextLink href={`/product/${product.slug.current}`} passHref>
          <Link>
            <Image
              src={urlFor(product.image)}
              alt={product.name}
              width={50}
              height={50}
            />
          </Link>
        </NextLink>
      </TableCell>
      <TableCell>
        <NextLink href={`/product/${product.slug.current}`} passHref>
          <Link>
            <Typography>{product.name}</Typography>
          </Link>
        </NextLink>
      </TableCell>
      <TableCell>
        <ButtonGroup variant="outlined">
          <Button onClick={handleOnDec}>-</Button>
          <Button>{quantity}</Button>
          <Button onClick={handleOnInc}>+</Button>
        </ButtonGroup>
      </TableCell>
      <TableCell>
        <Typography>${product.price}</Typography>
      </TableCell>
      <TableCell>
        <IconButton color="secondary" onClick={handleOnRemove}>
          <TiDeleteOutline />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default memo(Item);
