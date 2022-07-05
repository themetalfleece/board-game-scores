import { TextField, TextFieldProps } from "@mui/material";

export type NumericTextFieldProps = TextFieldProps & {
  /** default 0 */
  min?: number;
};

export const NumericTextField: React.FC<NumericTextFieldProps> = (props) => {
  return (
    <TextField
      {...props}
      type="number"
      inputProps={{
        inputMode: "numeric",
        pattern: "[0-9]*",
        min: typeof props.min === "number" ? props.min : 0,
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
