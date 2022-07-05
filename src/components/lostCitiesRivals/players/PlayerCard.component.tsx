import { Paper, Stack } from "@mui/material";
import { useAppDispatch } from "../../../store/useAppDispatch.hook";
import { NumericTextField } from "../../lib/NumericTextField.component";
import { PlayerName } from "../../lib/PlayerName.component";
import { setPlayerCoins } from "../lostCitiesRivals.slice";
import { StackContent } from "../stacks/StackContent.component";
import { PlayerI } from "./player.type";
import { PlayerDeleteButton } from "./PlayerDeleteButton.component";
import { PlayerScore } from "./PlayerScore.component";

export const PlayerCard: React.FC<{ player: PlayerI }> = ({ player }) => {
  const dispatch = useAppDispatch();

  return (
    <Paper sx={{ p: 1, minWidth: "300px" }}>
      <Stack spacing={2} alignItems="center">
        <PlayerName>{player.name}</PlayerName>

        <PlayerScore player={player} />

        <NumericTextField
          label="Coins"
          value={player.coins}
          onChange={(event) =>
            dispatch(
              setPlayerCoins({
                playerId: player.id,
                coins: +event.target.value,
              })
            )
          }
        />

        {player.stacks.map((stack, index) => (
          <StackContent
            stack={stack}
            name={`Stack ${index + 1}`}
            playerId={player.id}
            key={stack.id}
          />
        ))}

        <PlayerDeleteButton playerId={player.id} />
      </Stack>
    </Paper>
  );
};
