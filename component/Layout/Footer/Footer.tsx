import { Box, Typography } from "@mui/material";
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
