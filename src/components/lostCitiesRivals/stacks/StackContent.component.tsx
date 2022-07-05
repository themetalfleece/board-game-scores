import { Checkbox, FormControlLabel, Stack, Typography } from "@mui/material";
import { useAppDispatch } from "../../../store/useAppDispatch.hook";
import { NumericTextField } from "../../lib/NumericTextField.component";
import { setPlayerStack } from "../lostCitiesRivals.slice";
import { PlayerI } from "../players/player.type";
import { StackI } from "./stack.type";

type StackDataFields = keyof Pick<
  StackI,
  | "multipliers"
  | "singlePointers"
  | "doublePointers"
  | "hasFourOrMoreNumberCards"
>;

export const StackContent: React.FC<{
  stack: StackI;
  name: string;
  playerId: PlayerI["id"];
}> = ({ stack, name, playerId }) => {
  const dispatch = useAppDispatch();

  const changeStackValue = (
    value: number | boolean,
    field: StackDataFields
  ) => {
    dispatch(
      setPlayerStack({
        playerId,
        stackId: stack.id,
        stack: {
          ...stack,
          [field]: value,
        },
      })
    );
  };

  const handleChange =
    (field: StackDataFields) =>
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
      changeStackValue(+event.target.value, field);

  return (
    <Stack alignItems="center" spacing={1}>
      <Typography variant="h6">{name}</Typography>

      <NumericTextField
        label="Multipliers"
        value={stack.multipliers}
        onChange={handleChange("multipliers")}
      />

      <NumericTextField
        label="Single Pointers"
        value={stack.singlePointers}
        onChange={handleChange("singlePointers")}
      />

      <NumericTextField
        label="Double Pointers"
        value={stack.doublePointers}
        onChange={handleChange("doublePointers")}
      />

      <FormControlLabel
        sx={{ maxWidth: "196px" }}
        control={
          <Checkbox
            checked={stack.hasFourOrMoreNumberCards}
            onClick={() =>
              changeStackValue(
                !stack.hasFourOrMoreNumberCards,
                "hasFourOrMoreNumberCards"
              )
            }
          />
        }
        label="Has four or more number cards?"
      />
    </Stack>
  );
};
