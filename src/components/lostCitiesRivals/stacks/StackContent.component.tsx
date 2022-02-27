import { Stack, Typography } from "@mui/material";
import { useAppDispatch } from "../../../store/useAppDispatch.hook";
import { NumericTextField } from "../../lib/NumericTextField.component";
import { setPlayerStack } from "../lostCitiesRivals.slice";
import { PlayerI } from "../players/player.type";
import { StackI } from "./stack.type";

type StackDataFields = keyof Pick<
  StackI,
  "multipliers" | "singlePointers" | "doublePointers"
>;

export const StackContent: React.FC<{
  stack: StackI;
  name: string;
  playerId: PlayerI["id"];
}> = ({ stack, name, playerId }) => {
  const dispatch = useAppDispatch();

  const changeStackValue = (value: number, field: StackDataFields) => {
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

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    field: StackDataFields
  ) => changeStackValue(+event.target.value, field);

  return (
    <Stack alignItems="center" spacing={1}>
      <Typography>{name}</Typography>

      <NumericTextField
        label="Multipliers"
        value={stack.multipliers}
        onChange={(e) => handleChange(e, "multipliers")}
      />

      <NumericTextField
        label="Single Pointers"
        value={stack.singlePointers}
        onChange={(e) => handleChange(e, "singlePointers")}
      />

      <NumericTextField
        label="Double Pointers"
        value={stack.doublePointers}
        onChange={(e) => handleChange(e, "doublePointers")}
      />
    </Stack>
  );
};