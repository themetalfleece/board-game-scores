import { Paper, Stack, Typography } from "@mui/material";
import { StackContent } from "../stacks/StackContent.component";
import { PlayerI } from "./player.type";
import { PlayerDeleteButton } from "./PlayerDeleteButton.component";

export const PlayerCard: React.FC<{ player: PlayerI }> = ({ player }) => {
  return (
    <Paper sx={{ p: 1 }}>
      <Stack spacing={1} alignItems="center">
        <Stack direction="row" alignItems="center">
          <Typography variant="h6">{player.name}</Typography>
          <PlayerDeleteButton playerId={player.id} />
        </Stack>

        {player.stacks.map((stack, index) => (
          <StackContent
            stack={stack}
            name={`Stack ${index + 1}`}
            playerId={player.id}
            key={stack.id}
          />
        ))}
      </Stack>
    </Paper>
  );
};
