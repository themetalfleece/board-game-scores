import { Button } from "@mui/material";
import { useNavigate } from "react-router";

/** a button which navigates to the corresponding board game page on click */
export const GameChooseButton: React.FC<{ gamePath: string }> = ({
  gamePath,
  children,
}) => {
  const navigate = useNavigate();
  return (
    <Button
      sx={{ width: "100%" }}
      variant="contained"
      onClick={() => navigate(gamePath)}
    >
      {children}
    </Button>
  );
};
