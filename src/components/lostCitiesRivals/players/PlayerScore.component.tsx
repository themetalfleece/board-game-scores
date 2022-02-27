import { Typography } from "@mui/material";
import { PlayerI } from "./player.type";

export const PlayerScore: React.FC<{ player: PlayerI }> = ({ player }) => {
  const score = player.stacks.reduce((acc, val) => {
    return (
      acc +
      (val.multipliers + 1) * (val.singlePointers + val.doublePointers * 2)
    );
  }, 0);

  return <Typography variant="h6">Score: {score}</Typography>;
};
