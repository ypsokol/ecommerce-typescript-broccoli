import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

import { NextPage } from "next";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { useEffect } from "react";

import { useForm } from "react-hook-form";
import Form from "../../component/Form";
import { toast } from "react-toastify";
import axios from "axios";
import { useUser } from "../../context/user/hooks/useUser";
import { getError } from "../../utils/error";
import Name from "../../component/Fields/Name";
import Email from "../../component/Fields/Email";
import Password from "../../component/Fields/Password";
import ConfirmPassword from "../../component/Fields/ConfirmPassword";
import Routes from "../../constants/routes";

type Props = {};

const Register: NextPage = () => {
  const { onLogin, isUser } = useUser();
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    !isUser && router.push(Routes.home);
  }, [router, isUser]);

  const handleOnSubmit = async ({ name, email, password, confirmPassword }) => {
    console.log(name, email, password, confirmPassword);
    if (password !== confirmPassword) {
      toast.error("Password don't match");
      return;
    }
    try {
      const { data } = await axios.post("/api/users/register", {
        name,
        email,
        password,
      });
      onLogin(data);
      router.push(Routes.home);
    } catch (error: any) {
      toast.error(getError(error));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        <Typography component="h1" variant="h1">
          Register
        </Typography>
        <List>
          <ListItem>
            <Name control={control} errors={errors} />
          </ListItem>
          <ListItem>
            <Email control={control} errors={errors} />
          </ListItem>
          <ListItem>
            <Password control={control} errors={errors} />
          </ListItem>
          <ListItem>
            <ConfirmPassword control={control} errors={errors} />
          </ListItem>

          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Register
            </Button>
          </ListItem>
          <ListItem>
            Already have an account?{" "}
            <NextLink href={Routes.login} passHref>
              <Link>Login</Link>
            </NextLink>
          </ListItem>
        </List>
      </Form>
    </>
  );
};

export default Register;
