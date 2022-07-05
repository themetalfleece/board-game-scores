import { Button } from "@mui/material";
import { useAppDispatch } from "../../../store/useAppDispatch.hook";
import { reset } from "../sushiGo.slice";

export const NewGameButton: React.FC<{}> = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(reset());

  return <Button onClick={handleClick}>New Game</Button>;
};
