import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NewGameButton } from "./game/NewGameButton.component";
import { AddPlayerButton } from "./players/AddPlayerButton.component";
import { PlayerCard } from "./players/PlayerCard.component";
import { useSelector } from "./useSelector.hook";

export const LostCitiesRivals: React.FC<{}> = () => {
  const state = useSelector();

  const { players } = state;

  return (
    <Stack alignItems="center" spacing={2}>
      <Typography variant="h5">Lost Cities Rivals</Typography>

      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
        {players.map((player) => (
          <PlayerCard player={player} key={player.id} />
        ))}
      </Box>

      <AddPlayerButton />
      <NewGameButton />
    </Stack>
  );
};
