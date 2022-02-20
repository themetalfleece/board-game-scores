import { Button } from "@mui/material";

/** a button which navigates to the corresponding board game page on click */
export const BoardGameChooseButton: React.FC<{}> = ({ children }) => {
  return <Button variant="contained">{children}</Button>;
};
