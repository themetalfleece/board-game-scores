import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export const HomeButton: React.FC<{}> = () => {
  const navigate = useNavigate();

  return <Button onClick={() => navigate("/")}>Home</Button>;
};
