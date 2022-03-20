import { Paper, Stack, Typography } from "@mui/material";
import { PlayerI } from "./player.type";
import { PlayerContols } from "./PlayerControls.component";
import { PlayerDeleteButton } from "./PlayerDeleteButton.component";
import { PlayerScore } from "./PlayerScore.component";

export const PlayerCard: React.FC<{ player: PlayerI }> = ({ player }) => {
  return (
    <Paper sx={{ p: 1, width: "300px" }}>
      <Stack spacing={1} alignItems="center">
        <Typography variant="h6">{player.name}</Typography>

        <PlayerScore player={player} />

        <PlayerContols player={player} />

        <PlayerDeleteButton playerId={player.id} />
      </Stack>
    </Paper>
  );
};