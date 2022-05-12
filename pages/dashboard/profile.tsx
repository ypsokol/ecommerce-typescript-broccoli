import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { FC } from "react";
import { Form } from "../../component/Dashboard/Profile";

type Props = {};

const Profile: FC = () => {
  return (
    <>
      <Typography component="h1" variant="h1">
        Profile
      </Typography>
      <Form />
    </>
  );
};

export default dynamic(() => Promise.resolve(Profile), { ssr: false });
