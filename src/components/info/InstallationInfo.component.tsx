import { Stack, Typography } from "@mui/material";
import { isStandalone } from "../../util/isStandalone";

export const InstallationInfo: React.FC<{}> = () => {
  if (isStandalone()) {
    return null;
  }

  return (
    <Stack alignItems="center" sx={{ mt: 3 }}>
      <Typography variant="body2">
        You can install this as an App!
        <br />
        Just select the corresponding button from your browser's menu
        <br />
        (i.e. Add to phone, Add to home screen)
      </Typography>
    </Stack>
  );
};
