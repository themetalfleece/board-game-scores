import { Paper, Stack, Typography } from "@mui/material";
import { StackContent } from "../stacks/StackContent.component";
import { PlayerI } from "./player.type";
import { PlayerDeleteButton } from "./PlayerDeleteButton.component";
import { PlayerScore } from "./PlayerScore.component";

export const PlayerCard: React.FC<{ player: PlayerI }> = ({ player }) => {
  return (
    <Paper sx={{ p: 1, minWidth: "300px" }}>
      <Stack spacing={1} alignItems="center">
        <Typography variant="h6">{player.name}</Typography>

        <PlayerScore player={player} />

        {player.stacks.map((stack, index) => (
          <StackContent
            stack={stack}
            name={`Stack ${index + 1}`}
            playerId={player.id}
            key={stack.id}
          />
        ))}

        <PlayerDeleteButton playerId={player.id} />
      </Stack>
    </Paper>
  );
};
