import { Typography } from "@mui/material";
import { useMemo } from "react";
import { PlayerI } from "./player.type";

const pinkScoreMap = {
  0: 0,
  1: 1,
  2: 3,
  3: 6,
  4: 10,
  5: 15,
  6: 21,
  7: 28,
  8: 36,
  9: 45,
  10: 55,
  11: 66,
  12: 78,
  13: 91,
  14: 105,
  15: 120,
};

export const PlayerScore: React.FC<{ player: PlayerI }> = ({ player }) => {
  const { inGameState } = player;

  const score = useMemo(() => {
    let score = 0;
    score += inGameState.roundOneBlue * 3;
    score += inGameState.roundTwoBlue * 3;
    score += inGameState.roundTwoGreen * 4;
    score += inGameState.roundThreeBlue * 3;
    score += inGameState.roundThreeGreen * 4;
    score += inGameState.roundThreeGrey * 7;

    const effectivePink = Math.max(
      Math.min(inGameState.roundThreePink, 15),
      0
    ) as keyof typeof pinkScoreMap;
    score += pinkScoreMap[effectivePink];

    return score;
  }, [inGameState]);

  return <Typography variant="h6">Score: {score}</Typography>;
};
