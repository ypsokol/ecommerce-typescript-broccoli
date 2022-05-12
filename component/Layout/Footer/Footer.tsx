import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { FC } from "react";
import { classes } from "../../../utils/classes";

type Props = {};

const Footer: FC = () => {
	return (
		<Box component="footer" sx={classes.footer}>
			<Typography>All rights reserved. Sanity Amazon</Typography>
		</Box>
	);
};

export default Footer;
