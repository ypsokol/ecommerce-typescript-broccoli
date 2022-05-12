import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { FC } from "react";
import { useCart } from "../../context/cart/hooks/useCart";
import Item from "./Item";

const List: FC = () => {
  const { state } = useCart();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.map((item) => (
            <Item key={item.product._id} item={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
