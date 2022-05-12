import { FC } from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

type Props = {
  control: any;
  errors: any;
};

const Email: FC<Props> = ({ control, errors }) => {
  return (
    <Controller
      name="email"
      control={control}
      defaultValue=""
      rules={{
        required: true,
        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      }}
      render={({ field }) => (
        <TextField
          variant="outlined"
          fullWidth
          id="email"
          label="Email"
          inputProps={{ type: "email" }}
          error={Boolean(errors.email)}
          helperText={
            errors.email
              ? errors.email.type === "pattern"
                ? "Email is not valid"
                : "Email is required"
              : ""
          }
          {...field}
        />
      )}
    />
  );
};

export default Email;
