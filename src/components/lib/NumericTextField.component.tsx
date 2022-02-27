import { Stack, TextField, TextFieldProps } from "@mui/material";

export type NumericTextFieldProps = TextFieldProps;

export const NumericTextField: React.FC<NumericTextFieldProps> = (props) => {
  return (
    <Stack direction="row">
      <TextField
        {...props}
        inputProps={{
          inputMode: "numeric",
          pattern: "[0-9]*",
          ...props.inputProps,
        }}
      />
    </Stack>
  );
};
