import { PlayerI } from "../players/player.type";
import { useAppDispatch } from "../../../store/useAppDispatch.hook";
import { deletePlayer } from "../ticketToRideEurope.slice";
import { DeleteIconButton } from "../../lib/DeleteIconButton.component";

export const PlayerDeleteButton: React.FC<{ playerId: PlayerI["id"] }> = ({
  playerId,
}) => {
  const dispatch = useAppDispatch();

  const onDelete = () => {
    dispatch(deletePlayer(playerId));
  };

  return <DeleteIconButton onDelete={onDelete} />;
};
