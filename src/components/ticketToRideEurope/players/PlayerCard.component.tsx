import { Paper, Stack, Typography } from "@mui/material";
import { PlayerI } from "./player.type";
import { PlayerDeleteButton } from "./PlayerDeleteButton.component";

export const PlayerCard: React.FC<{ player: PlayerI }> = ({ player }) => {
  return (
    <Paper sx={{ p: 1, minWidth: "300px" }}>
      <Stack spacing={1} alignItems="center">
        <Typography variant="h6">{player.name}</Typography>

        <PlayerDeleteButton playerId={player.id} />
      </Stack>
    </Paper>
  );
};
