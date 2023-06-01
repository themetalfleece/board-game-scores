import {
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import usePWA from "../lib/usePWA.hook";
import { useState } from "react";

export const InstallationInfo: React.FC<ButtonProps> = (props) => {
  const { isStandalone, isInstallPromptSupported, promptInstall } = usePWA();

  const [isDialogOpen, setDialogOpen] = useState(false);

  const onButtonClick = async () => {
    if (isInstallPromptSupported) {
      await promptInstall();
    } else {
      setDialogOpen(true);
    }
  };

  const onCloseDialog = () => setDialogOpen(false);

  if (isStandalone) {
    return null;
  }

  return (
    <>
      <Button variant="outlined" onClick={onButtonClick} {...props}>
        Install App
      </Button>
      <Dialog
        open={isDialogOpen}
        onClose={onCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" textAlign="center">
          You can install this as an App!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" textAlign="center">
            <b>Android</b>
            <br />
            Just select the corresponding button from your browser's menu:
            <br />
            Add to phone, Add to home screen, or something similar.
            <br />
            <br />
            <b>iOS Safari</b>
            <br />
            Share `{"->"}` Add to Home Screen.
            <br />
            <br />
            <b>Desktop</b>
            <br />
            Look for the install button in the address bar.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseDialog} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
