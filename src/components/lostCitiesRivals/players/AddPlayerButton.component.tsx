import { Button } from "@mui/material";
import { useAppDispatch } from "../../../store/useAppDispatch.hook";
import { addPlayer } from "../lostCitiesRivals.slice";
import { useSelector } from "../useSelector.hook";

export const AddPlayerButton: React.FC<{}> = () => {
  const store = useSelector();
  const dispatch = useAppDispatch();

  return (
    <Button
      onClick={() => dispatch(addPlayer(`Player ${store.players.length + 1}`))}
    >
      Add player
    </Button>
  );
};
