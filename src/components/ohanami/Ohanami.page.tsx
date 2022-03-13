import { Stack, Typography } from "@mui/material";
import { HomeButton } from "../home/HomeButton.component";
import { NewGameButton } from "./game/NewGameButton.component";
import { AddPlayerButton } from "./players/AddPlayerButton.component";
import { PlayerCard } from "./players/PlayerCard.component";
import { useSelector } from "./useSelector.hook";

export const Ohanami: React.FC<{}> = () => {
  const state = useSelector();

  const { players } = state;

  return (
    <Stack alignItems="center" spacing={2}>
      <Typography variant="h5">Ohanami</Typography>

      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
        {players.map((player) => (
          <PlayerCard player={player} key={player.id} />
        ))}
      </Stack>

      <Stack direction="column" spacing={1}>
        <AddPlayerButton />
        <NewGameButton />
        <HomeButton />
      </Stack>
    </Stack>
  );
};
