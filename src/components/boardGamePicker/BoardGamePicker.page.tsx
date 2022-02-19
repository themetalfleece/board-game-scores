import { Typography, Box } from "@mui/material";

export const BoardGamePicker: React.FC<{}> = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={{ gap: (theme) => theme.spacing(1) }}
    >
      <Typography variant="h4">Choose your game</Typography>
    </Box>
  );
};
