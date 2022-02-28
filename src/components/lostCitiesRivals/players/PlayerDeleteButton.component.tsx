import { IconButton } from "@mui/material";
import { PlayerI } from "../players/player.type";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "../../../store/useAppDispatch.hook";
import { deletePlayer } from "../lostCitiesRivals.slice";
import { useState } from "react";

export const PlayerDeleteButton: React.FC<{ playerId: PlayerI["id"] }> = ({
  playerId,
}) => {
  const dispatch = useAppDispatch();

  const [deletePending, setDeletePending] = useState(false);

  const handleDelete = () => {
    if (deletePending) {
      dispatch(deletePlayer(playerId));
    } else {
      setDeletePending(true);
    }
  };

  return (
    <IconButton
      color={deletePending ? "error" : "default"}
      onClick={handleDelete}
      onBlur={() => setDeletePending(false)}
    >
      <DeleteIcon />
    </IconButton>
  );
};
