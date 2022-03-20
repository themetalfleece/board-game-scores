import { Divider, Stack, Typography } from "@mui/material";
import { useAppDispatch } from "../../../store/useAppDispatch.hook";
import { NumericTextField } from "../../lib/NumericTextField.component";
import { setPlayerData } from "../ohanami.slice";
import { PlayerI } from "./player.type";
import { PlayerInGameState } from "./playerInGameState.type";

type PlayerInGameStateFields = keyof PlayerInGameState;

export const PlayerContols: React.FC<{ player: PlayerI }> = ({ player }) => {
  const dispatch = useAppDispatch();

  const { inGameState, id: playerId } = player;

  const changeSingleValue = (
    value: number | number[],
    field: PlayerInGameStateFields
  ) => {
    dispatch(
      setPlayerData({
        playerId,
        data: {
          ...inGameState,
          [field]: value,
        },
      })
    );
  };

  const handleNumericChange =
    (field: PlayerInGameStateFields) =>
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
      changeSingleValue(+event.target.value, field);

  return (
    <Stack alignItems="center" spacing={2}>
      <Divider style={{ width: "100%" }} />

      <Typography variant="body1">Round 1</Typography>

      <NumericTextField
        label="Round One Blue"
        value={inGameState.roundOneBlue}
        onChange={handleNumericChange("roundOneBlue")}
        sx={{ width: "100%" }}
      />

      <Divider style={{ width: "100%" }} />

      <Typography variant="body1">Round 2</Typography>

      <NumericTextField
        label="Round Two Blue"
        value={inGameState.roundTwoBlue}
        onChange={handleNumericChange("roundTwoBlue")}
        sx={{ width: "100%" }}
      />

      <NumericTextField
        label="Round Two Green"
        value={inGameState.roundTwoGreen}
        onChange={handleNumericChange("roundTwoGreen")}
        sx={{ width: "100%" }}
      />

      <Divider style={{ width: "100%" }} />

      <Typography variant="body1">Round 3</Typography>

      <NumericTextField
        label="Round Three Blue"
        value={inGameState.roundThreeBlue}
        onChange={handleNumericChange("roundThreeBlue")}
        sx={{ width: "100%" }}
      />

      <NumericTextField
        label="Round Three Green"
        value={inGameState.roundThreeGreen}
        onChange={handleNumericChange("roundThreeGreen")}
        sx={{ width: "100%" }}
      />

      <NumericTextField
        label="Round Three Grey"
        value={inGameState.roundThreeGrey}
        onChange={handleNumericChange("roundThreeGrey")}
        sx={{ width: "100%" }}
      />

      <NumericTextField
        label="Round Three Pink"
        value={inGameState.roundThreePink}
        onChange={handleNumericChange("roundThreePink")}
        sx={{ width: "100%" }}
      />
    </Stack>
  );
};
