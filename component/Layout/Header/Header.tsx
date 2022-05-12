import Head from "next/head";
import { FC } from "react";

type Props = {
	title?: string;
	description?: string;
};

const Header: FC<Props> = ({ title, description }) => {
	return (
		<Head>
			<title>{title ? `${title} - Sanity Shop` : "Sanity Shop"}</title>
			{description && (
				<meta name="description" content={description}></meta>
			)}
		</Head>
	);
};

export default Header;
