import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router";

export const HomeButton: React.FC<{}> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);

  return (
    <Button onClick={() => navigate("/", { replace: true, state: [] })}>
      Home
    </Button>
  );
};
