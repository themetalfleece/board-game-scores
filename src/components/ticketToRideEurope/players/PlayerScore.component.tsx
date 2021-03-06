import { Typography } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "../useSelector.hook";
import { PlayerI } from "./player.type";

export const PlayerScore: React.FC<{ player: PlayerI }> = ({ player }) => {
  const { inGameState } = player;

  const state = useSelector();

  const { players } = state;

  const longestPathLengthOfAllPlayers = Math.max(
    ...players.map((p) => p.inGameState.longestPathLength)
  );

  const score = useMemo(() => {
    let score = 0;
    score += inGameState.oneWagonRoutes * 1;
    score += inGameState.twoWagonRoutes * 2;
    score += inGameState.threeWagonRoutes * 4;
    score += inGameState.fourWagonRoutes * 7;
    score += inGameState.sixWagonRoutes * 15;
    score += inGameState.eightWagonRoutes * 21;

    score += inGameState.stationsKept * 4;

    score += inGameState.completedTicketPoints.reduce(
      (acc, val) => acc + val,
      0
    );

    score += inGameState.uncompletedTicketPoints.reduce(
      (acc, val) => acc - val,
      0
    );

    if (inGameState.longestPathLength === longestPathLengthOfAllPlayers) {
      score += 10;
    }

    return score;
  }, [inGameState, longestPathLengthOfAllPlayers]);

  return <Typography variant="h6">Score: {score}</Typography>;
};
