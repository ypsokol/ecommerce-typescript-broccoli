import { FC } from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

type Props = {
  control: any;
  errors: any;
};

const Name: FC<Props> = ({ control, errors }) => {
  return (
    <Controller
      name="name"
      control={control}
      defaultValue=""
      rules={{
        required: true,
        minLength: 2,
      }}
      render={({ field }) => (
        <TextField
          variant="outlined"
          fullWidth
          id="name"
          label="Name"
          inputProps={{ type: "name" }}
          error={Boolean(errors.name)}
          helperText={
            errors.name
              ? errors.name.type === "pattern"
                ? "Name length is more than 1"
                : "Name is required"
              : ""
          }
          {...field}
        />
      )}
    />
  );
};

export default Name;
