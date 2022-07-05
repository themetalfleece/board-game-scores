import { Stack, Typography } from "@mui/material";
import { HomeButton } from "../home/HomeButton.component";

export const SushiGo: React.FC = () => {
  return (
    <Stack alignItems="center" spacing={2}>
      <Typography variant="h5">Sushi Go</Typography>

      <Stack direction="column" spacing={1}>
        <HomeButton />
      </Stack>
    </Stack>
  );
};
