import {
  Stack,
  Divider,
  Typography,
  FormControl,
  Chip,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../../store/useAppDispatch.hook";
import { NumericTextField } from "../../lib/NumericTextField.component";
import { RoundI, RoundIndexesI } from "../rounds/round.type";
import { NigiriAndWasabiI } from "../sushi/nigiriAndWasabi.type";
import { setRoundData } from "../sushiGo.slice";
import { PlayerI } from "./player.type";

const nigiriAndWasabiFriendly: Record<NigiriAndWasabiI, string> = {
  "1": "Nigiri w/ egg",
  "2": "Nigiri w/ salmon",
  "3": "Nigiri w/ squid",
  "1x3": "Nigiri w/ egg and washabi",
  "2x3": "Nigiri w/ salmon and washabi",
  "3x3": "Nigiri w/ squid and washabi",
};

export const PlayerControls: React.FC<{
  player: PlayerI;
}> = ({ player }) => {
  const dispatch = useAppDispatch();

  const { rounds, id: playerId } = player;

  const changeSingleValue = (
    value: string | string[] | number,
    roundIndex: RoundIndexesI,
    field: keyof RoundI
  ) => {
    dispatch(
      setRoundData({
        playerId,
        roundIndex,
        data: {
          ...rounds[roundIndex],
          [field]: value,
        },
      })
    );
  };

  const handleNumericChange =
    (field: keyof RoundI, roundIndex: RoundIndexesI) =>
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
      changeSingleValue(+event.target.value, roundIndex, field);

  const pushNigiriAndWashabiValue = (
    value: string,
    roundIndex: RoundIndexesI
  ) => {
    return changeSingleValue(
      [...rounds[roundIndex].nigiriAndWasabi, value],
      roundIndex,
      "nigiriAndWasabi"
    );
  };

  const removeNigiriAndWashabiValue = (
    index: number,
    roundIndex: RoundIndexesI
  ) => {
    const newArr = [...rounds[roundIndex].nigiriAndWasabi];
    newArr.splice(index, 1);
    return changeSingleValue(newArr, roundIndex, "nigiriAndWasabi");
  };

  const roundIndexes: RoundIndexesI[] = [0, 1, 2];

  return (
    <Stack alignItems="center" spacing={2}>
      {roundIndexes.map((roundIndex) => (
        <React.Fragment key={roundIndex}>
          <Divider style={{ width: "100%" }} />

          <Typography variant="body1">Round {roundIndex + 1}</Typography>

          <NumericTextField
            label="Total Maki Roll icons"
            value={rounds[roundIndex].makiRollIcons}
            onChange={handleNumericChange("makiRollIcons", roundIndex)}
            sx={{ width: "100%" }}
          />

          <NumericTextField
            label="Tempuras"
            value={rounds[roundIndex].tempuras}
            onChange={handleNumericChange("tempuras", roundIndex)}
            sx={{ width: "100%" }}
          />

          <NumericTextField
            label="Sashimis"
            value={rounds[roundIndex].sashimis}
            onChange={handleNumericChange("sashimis", roundIndex)}
            sx={{ width: "100%" }}
          />

          <NumericTextField
            label="Dumplings"
            value={rounds[roundIndex].dumplings}
            onChange={handleNumericChange("dumplings", roundIndex)}
            sx={{ width: "100%" }}
          />

          <NumericTextField
            label="Puddings"
            value={rounds[roundIndex].puddings}
            onChange={handleNumericChange("puddings", roundIndex)}
            sx={{ width: "100%" }}
          />

          <Stack gap={1} width="100%">
            <FormControl fullWidth>
              <InputLabel id="nigiri-and-washabi-label">
                Nigiri and Washabi
              </InputLabel>
              <Select
                fullWidth
                value={0}
                labelId="nigiri-and-washabi-label"
                label="Nigiri and Washabi"
                onChange={(e) =>
                  pushNigiriAndWashabiValue(
                    e.target.value.toString(),
                    roundIndex
                  )
                }
              >
                <MenuItem value={0} disabled>
                  Add one...
                </MenuItem>
                <MenuItem value={"1"}>{nigiriAndWasabiFriendly["1"]}</MenuItem>
                <MenuItem value={"2"}>{nigiriAndWasabiFriendly["2"]}</MenuItem>
                <MenuItem value={"3"}>{nigiriAndWasabiFriendly["3"]}</MenuItem>
                <MenuItem value={"1x3"}>
                  {nigiriAndWasabiFriendly["1x3"]}
                </MenuItem>
                <MenuItem value={"2x3"}>
                  {nigiriAndWasabiFriendly["2x3"]}
                </MenuItem>
                <MenuItem value={"3x3"}>
                  {nigiriAndWasabiFriendly["3x3"]}
                </MenuItem>
              </Select>
            </FormControl>
            <Stack
              direction="row"
              flexWrap="wrap"
              gap={1}
              justifyContent="space-evenly"
            >
              {rounds[roundIndex].nigiriAndWasabi.map((value, index) => (
                <Chip
                  label={nigiriAndWasabiFriendly[value]}
                  onDelete={() => {
                    removeNigiriAndWashabiValue(index, roundIndex);
                  }}
                  key={`${index}_${value}`}
                />
              ))}
            </Stack>
          </Stack>
        </React.Fragment>
      ))}
    </Stack>
  );
};
