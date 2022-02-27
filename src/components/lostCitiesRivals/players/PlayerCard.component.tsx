import { Paper } from "@mui/material";
import { PlayerI } from "./player.type";

export const PlayerCard: React.FC<{ player: PlayerI }> = ({ player }) => {
  return <Paper sx={{ p: 2 }}>{player.name}</Paper>;
};
