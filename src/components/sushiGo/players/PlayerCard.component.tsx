import { Paper, Stack } from "@mui/material";
import { PlayerName } from "../../lib/PlayerName.component";
import { PlayerI } from "./player.type";
import { PlayerControls } from "./PlayerControls.component";
import { PlayerDeleteButton } from "./PlayerDeleteButton.component";

export const PlayerCard: React.FC<{ player: PlayerI }> = ({ player }) => {
  return (
    <Paper sx={{ p: 1, width: "300px" }}>
      <Stack spacing={1} alignItems="center">
        <PlayerName>{player.name}</PlayerName>

        <PlayerControls player={player} />

        <PlayerDeleteButton playerId={player.id} />
      </Stack>
    </Paper>
  );
};
