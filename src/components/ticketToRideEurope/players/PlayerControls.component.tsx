import {
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { useAppDispatch } from "../../../store/useAppDispatch.hook";
import { NumericTextField } from "../../lib/NumericTextField.component";
import { setPlayerData } from "../ticketToRideEurope.slice";
import { PlayerI } from "./player.type";
import { PlayerInGameState } from "./playerInGameState.type";

type PlayerInGameStateFields = keyof PlayerInGameState;

export const PlayerContols: React.FC<{ player: PlayerI }> = ({ player }) => {
  const dispatch = useAppDispatch();

  const { inGameState, id: playerId } = player;

  const changeStackValue = (
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

  const pushArrayValue = (
    value: number,
    field: keyof Pick<
      PlayerInGameState,
      "completedTicketPoints" | "uncompletedTicketPoints"
    >
  ) => {
    return changeStackValue([...inGameState[field], value], field);
  };

  const removeArrayValueByIndex = (
    index: number,
    field: keyof Pick<
      PlayerInGameState,
      "completedTicketPoints" | "uncompletedTicketPoints"
    >
  ) => {
    const newArr = [...inGameState[field]];
    newArr.splice(index, 1);
    return changeStackValue(newArr, field);
  };

  const handleNumericChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    field: PlayerInGameStateFields
  ) => changeStackValue(+event.target.value, field);

  return (
    <Stack alignItems="center" spacing={2}>
      <NumericTextField
        label="One Wagon Routes"
        value={inGameState.oneWagonRoutes}
        onChange={(e) => handleNumericChange(e, "oneWagonRoutes")}
        sx={{ width: "100%" }}
      />

      <NumericTextField
        label="Two Wagon Routes"
        value={inGameState.twoWagonRoutes}
        onChange={(e) => handleNumericChange(e, "twoWagonRoutes")}
        sx={{ width: "100%" }}
      />

      <NumericTextField
        label="Three Wagon Routes"
        value={inGameState.threeWagonRoutes}
        onChange={(e) => handleNumericChange(e, "threeWagonRoutes")}
        sx={{ width: "100%" }}
      />

      <NumericTextField
        label="Four Wagon Routes"
        value={inGameState.fourWagonRoutes}
        onChange={(e) => handleNumericChange(e, "fourWagonRoutes")}
        sx={{ width: "100%" }}
      />

      <NumericTextField
        label="Six Wagon Routes"
        value={inGameState.sixWagonRoutes}
        onChange={(e) => handleNumericChange(e, "sixWagonRoutes")}
        sx={{ width: "100%" }}
      />

      <NumericTextField
        label="Eight Wagon Routes"
        value={inGameState.eightWagonRoutes}
        onChange={(e) => handleNumericChange(e, "eightWagonRoutes")}
        sx={{ width: "100%" }}
      />

      <NumericTextField
        label="Stations Kept"
        value={inGameState.stationsKept}
        onChange={(e) => handleNumericChange(e, "stationsKept")}
        sx={{ width: "100%" }}
      />

      <NumericTextField
        label="Longest Path Length"
        value={inGameState.longestPathLength}
        onChange={(e) => handleNumericChange(e, "longestPathLength")}
        sx={{ width: "100%" }}
      />

      <Stack gap={1} width="100%">
        <FormControl fullWidth>
          <InputLabel id="completed-ticket-points-label">
            Points of Completed Tickets
          </InputLabel>
          <Select
            fullWidth
            value={0}
            labelId="completed-ticket-points-label"
            label="Points of Completed Tickets"
            onChange={(e) =>
              pushArrayValue(+e.target.value, "completedTicketPoints")
            }
          >
            <MenuItem value={0} disabled>
              Add one...
            </MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={11}>11</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={13}>13</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={21}>21</MenuItem>
          </Select>
        </FormControl>
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={1}
          justifyContent="space-evenly"
        >
          {inGameState.completedTicketPoints.map((points, index) => (
            <Chip
              label={points}
              onDelete={() => {
                removeArrayValueByIndex(index, "completedTicketPoints");
              }}
              key={`${index}_${points}`}
            />
          ))}
        </Stack>
      </Stack>

      <Stack gap={1} width="100%">
        <FormControl fullWidth>
          <InputLabel id="uncompleted-ticket-points-label">
            Points of Uncompleted Tickets
          </InputLabel>
          <Select
            fullWidth
            value={0}
            labelId="uncompleted-ticket-points-label"
            label="Points of Uncompleted Tickets"
            onChange={(e) =>
              pushArrayValue(+e.target.value, "uncompletedTicketPoints")
            }
          >
            <MenuItem value={0} disabled>
              Add one...
            </MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={11}>11</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={13}>13</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={21}>21</MenuItem>
          </Select>
        </FormControl>
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={1}
          justifyContent="space-evenly"
        >
          {inGameState.uncompletedTicketPoints.map((points, index) => (
            <Chip
              label={points}
              onDelete={() => {
                removeArrayValueByIndex(index, "uncompletedTicketPoints");
              }}
              key={`${index}_${points}`}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
