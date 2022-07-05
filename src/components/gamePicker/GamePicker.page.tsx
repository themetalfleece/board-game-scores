import { Typography, Stack } from "@mui/material";
import { GameChooseButton } from "./GameChooseButton.component";
import { gameRoutes } from "../routedGames/gameRoutes";
import { InstallationInfo } from "../info/InstallationInfo.component";

export const GamePicker: React.FC<{}> = () => {
  return (
    <Stack alignItems="center" sx={{ gap: (theme) => theme.spacing(1) }}>
      <Typography variant="h4">Choose your game</Typography>

      <Stack alignItems="center" sx={{ gap: (theme) => theme.spacing(1) }}>
        <GameChooseButton gamePath={gameRoutes.lostCitiesRivals}>
          Lost Cities Rivals
        </GameChooseButton>

        <GameChooseButton gamePath={gameRoutes.ticketToRideEurope}>
          Ticket to Ride Europe
        </GameChooseButton>

        <GameChooseButton gamePath={gameRoutes.ohanami}>
          Ohanami
        </GameChooseButton>

        <GameChooseButton gamePath={gameRoutes.sushiGo}>
          Sushi Go
        </GameChooseButton>
      </Stack>

      <InstallationInfo />
    </Stack>
  );
};
