import { IconButton } from "@mui/material";
import { PlayerI } from "../players/player.type";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "../../../store/useAppDispatch.hook";
import { deletePlayer } from "../ticketToRideEurope.slice";

export const PlayerDeleteButton: React.FC<{ playerId: PlayerI["id"] }> = ({
  playerId,
}) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => dispatch(deletePlayer(playerId));

  return (
    <IconButton color="error" onClick={handleDelete}>
      <DeleteIcon />
    </IconButton>
  );
};
