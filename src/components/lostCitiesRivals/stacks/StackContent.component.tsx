import { Stack, Typography } from "@mui/material";
import { useAppDispatch } from "../../../store/useAppDispatch.hook";
import { NumericTextField } from "../../lib/NumericTextField.component";
import { setPlayerStack } from "../lostCitiesRivals.slice";
import { PlayerI } from "../players/player.type";
import { StackI } from "./stack.type";

type StackDataFields = keyof Pick<
  StackI,
  "wagers" | "singleFootprints" | "doubleFootprints"
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
        label="Wagers (multipliers)"
        value={stack.wagers}
        onChange={handleChange("wagers")}
      />

      <NumericTextField
        label="Single Footprints"
        value={stack.singleFootprints}
        onChange={handleChange("singleFootprints")}
      />

      <NumericTextField
        label="Double Footprints"
        value={stack.doubleFootprints}
        onChange={handleChange("doubleFootprints")}
      />
    </Stack>
  );
};
