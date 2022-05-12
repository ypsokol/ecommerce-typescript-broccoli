import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import { FC, useEffect } from "react";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { useUser } from "../../../context/user/hooks/useUser";
import { toast } from "react-toastify";
import { NextApi } from "../../../utils/api/nextApi";
import { getError } from "../../../utils/error";
import Routes from "../../../constants/routes";
import { default as FormContainer } from "../../Form";
import Name from "../../Fields/Name";
import Email from "../../Fields/Email";
import Password from "../../Fields/Password";
import ConfirmPassword from "../../Fields/ConfirmPassword";

type Props = {};

const Form: FC = () => {
  const { state, isUser, onLogin } = useUser();
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (!isUser) router.push(Routes.home);

    setValue("name", state.name);
    setValue("email", state.email);
  }, [state, setValue, isUser, router]);

  const handleOnChangeProfile = async ({
    name,
    email,
    password,
    confirmPassword,
  }: any) => {
    if (password !== confirmPassword) {
      toast.error("Password don't match");
      return;
    }

    try {
      const response = await NextApi.changeUserInfo({
        name,
        email,
        password,
        token: state.token,
      });
      onLogin(response.data);
      toast.success("Profile updated successfully");
      router.push(Routes.home);
    } catch (error) {
      toast.error(getError(error));
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(handleOnChangeProfile)}>
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
            Update
          </Button>
        </ListItem>
      </List>
    </FormContainer>
  );
};

export default Form;
