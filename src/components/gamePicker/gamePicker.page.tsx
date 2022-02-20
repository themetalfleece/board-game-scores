import { Typography, Box } from "@mui/material";
import { GameChooseButton } from "../gameChooseButton/GameChooseButton.component";
import { gameRoutes } from "../routedGames/gameRoutes";

export const GamePicker: React.FC<{}> = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={{ gap: (theme) => theme.spacing(1) }}
    >
      <Typography variant="h4">Choose your game</Typography>
      <GameChooseButton gamePath={gameRoutes.lostCitiesRivals}>
        Lost Cities Rivals
      </GameChooseButton>
    </Box>
  );
};
