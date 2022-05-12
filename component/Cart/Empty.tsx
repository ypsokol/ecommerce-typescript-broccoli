import { Box, Link, Typography } from "@mui/material";
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
