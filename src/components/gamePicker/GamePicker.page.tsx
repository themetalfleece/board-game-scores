import { Typography, Stack } from "@mui/material";
import { GameChooseButton } from "./GameChooseButton.component";
import { gameRoutes } from "../routedGames/gameRoutes";

export const GamePicker: React.FC<{}> = () => {
  return (
    <Stack alignItems="center" sx={{ gap: (theme) => theme.spacing(1) }}>
      <Typography variant="h4">Choose your game</Typography>

      <GameChooseButton gamePath={gameRoutes.lostCitiesRivals}>
        Lost Cities Rivals
      </GameChooseButton>
    </Stack>
  );
};
