import { FC } from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

type Props = {
  control: any;
  errors: any;
};

const ConfirmPassword: FC<Props> = ({ control, errors }) => {
  return (
    <Controller
      name="confirmPassword"
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
          id="confirmPassword"
          label="Confirm Password"
          inputProps={{ type: "confirmPassword" }}
          error={Boolean(errors.confirmPassword)}
          helperText={
            errors.confirmPassword
              ? errors.confirmPassword.type === "pattern"
                ? "Confirm Password length should be more than 5"
                : "Confirm Password is required"
              : ""
          }
          {...field}
        />
      )}
    />
  );
};

export default ConfirmPassword;
