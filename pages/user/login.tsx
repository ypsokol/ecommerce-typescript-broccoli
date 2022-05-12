import { Button, Link, List, ListItem, Typography } from "@mui/material";
import { NextPage } from "next";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Form from "../../component/Form";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useUser } from "../../context/user/hooks/useUser";
import axios from "axios";
import { getError } from "../../utils/error";
import Routes from "../../constants/routes";
import Email from "../../component/Fields/Email";
import Password from "../../component/Fields/Password";

type Props = {};

const Login: NextPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { state, onLogin, isUser } = useUser();

  useEffect(() => {
    if (isUser) {
      router.push(Routes.home);
    }
  }, [router, isUser]);

  const handleOnSubmit = async ({ email, password }) => {
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      console.log(data);
      onLogin(data);
      router.push(Routes.home);
    } catch (error: any) {
      toast.error(getError(error));
    }
  };

  return (
    <>
      <Typography component="h1" variant="h1">
        Login
      </Typography>
      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        <List>
          <ListItem>
            <Email control={control} errors={errors} />
          </ListItem>
          <ListItem>
            <Password control={control} errors={errors} />
          </ListItem>

          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Login
            </Button>
          </ListItem>
          <ListItem>
            Do not have an account?{" "}
            <NextLink href="/register" passHref>
              <Link>Register</Link>
            </NextLink>
          </ListItem>
        </List>
      </Form>
    </>
  );
};

export default Login;
