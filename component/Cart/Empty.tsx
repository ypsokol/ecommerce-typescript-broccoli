import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { memo } from "react";
import NextLink from "next/link";

const Empty = () => (
  <Box>
    <Typography>
      Cart is empty.
      <NextLink href="/" passHref>
        <Link>Go shopping</Link>
      </NextLink>
    </Typography>
  </Box>
);

export default memo(Empty);
