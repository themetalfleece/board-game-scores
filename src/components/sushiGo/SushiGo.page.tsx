import { Stack, Typography } from "@mui/material";
import { HomeButton } from "../home/HomeButton.component";
import { NewGameButton } from "./game/NewGameButton.component";
import { AddPlayerButton } from "./players/AddPlayerButton.component";

export const SushiGo: React.FC = () => {
  return (
    <Stack alignItems="center" spacing={2}>
      <Typography variant="h5">Sushi Go</Typography>

      <Stack direction="column" spacing={1}>
        <AddPlayerButton />
        <NewGameButton />
        <HomeButton />
      </Stack>
    </Stack>
  );
};
