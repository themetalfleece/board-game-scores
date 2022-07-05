import { Typography } from "@mui/material";
import { useMemo } from "react";
import { PlayerI } from "./player.type";

export const PlayerScore: React.FC<{ player: PlayerI }> = ({ player }) => {
  const score = useMemo(
    () =>
      player.coins +
      player.stacks.reduce((acc, val) => {
        return (
          acc +
          (val.multipliers + 1) *
            (val.singleFootprints + val.doubleFootprints * 2) +
          (val.singleFootprints + val.doubleFootprints >= 4 ? 8 : 0)
        );
      }, 0),
    [player]
  );

  return <Typography variant="h6">Score: {score}</Typography>;
};
