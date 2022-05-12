import { FC } from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

type Props = {
  control: any;
  errors: any;
};

const Password: FC<Props> = ({ control, errors }) => {
  return (
    <Controller
      name="password"
      control={control}
      defaultValue=""
      rules={{
        required: true,
        minLength: 6,
      }}
      render={({ field }) => (
        <TextField
          variant="outlined"
          fullWidth
          id="password"
          label="Password"
          inputProps={{ type: "password" }}
          error={Boolean(errors.password)}
          helperText={
            errors.password
              ? errors.password.type === "pattern"
                ? "Password length should be more than 5"
                : "Password is required"
              : ""
          }
          {...field}
        />
      )}
    />
  );
};

export default Password;
