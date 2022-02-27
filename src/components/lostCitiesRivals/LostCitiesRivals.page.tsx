import { Stack, Typography } from "@mui/material";
import { AddPlayerButton } from "./players/AddPlayerButton.component";
import { PlayerCard } from "./players/PlayerCard.component";
import { useSelector } from "./useSelector.hook";

export const LostCitiesRivals: React.FC<{}> = () => {
  const state = useSelector();

  const { players } = state;

  return (
    <Stack alignItems="center" spacing={2}>
      <Typography variant="h5">Lost Cities Rivals</Typography>

      {players.map((player) => (
        <PlayerCard player={player} key={player.id} />
      ))}

      <AddPlayerButton />
    </Stack>
  );
};
