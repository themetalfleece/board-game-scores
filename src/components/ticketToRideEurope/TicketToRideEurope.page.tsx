import { Box, Stack, Typography } from "@mui/material";
import { PlayerCard } from "./players/PlayerCard.component";
import { useSelector } from "./useSelector.hook";

export const TicketToRideEurope: React.FC<{}> = () => {
  const state = useSelector();

  const { players } = state;

  return (
    <Stack alignItems="center" spacing={2}>
      <Typography variant="h5">Ticket to Ride Europe</Typography>

      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
        {players.map((player) => (
          <PlayerCard player={player} key={player.id} />
        ))}
      </Box>
    </Stack>
  );
};
