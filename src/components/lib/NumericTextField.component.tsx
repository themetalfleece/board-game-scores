import { TextField, TextFieldProps } from "@mui/material";

export type NumericTextFieldProps = TextFieldProps;

export const NumericTextField: React.FC<NumericTextFieldProps> = (props) => {
  return (
    <TextField
      {...props}
      inputProps={{
        inputMode: "numeric",
        pattern: "[0-9]*",
        ...props.inputProps,
      }}
      onChange={(e) => {
        const value = +e.target.value;

        if (isNaN(value)) {
          return;
        }

        props.onChange?.(e);
      }}
      onFocus={(event) => {
        event.target.select();
      }}
    />
  );
};
