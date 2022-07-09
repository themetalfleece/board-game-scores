import { Typography } from "@mui/material";
import { RoundIndexesI } from "../rounds/round.type";
import { NigiriAndWasabiI } from "../sushi/nigiriAndWasabi.type";
import { useSelector } from "../useSelector.hook";
import { PlayerI } from "./player.type";

const dumplingsScoreMap: Record<number, number> = {
  0: 0,
  1: 1,
  2: 3,
  3: 6,
  4: 10,
  5: 15,
};

const nigiriAndWasabiScoreMap: Record<NigiriAndWasabiI, number> = {
  "1": 1,
  "2": 2,
  "3": 3,
  "1x3": 3,
  "2x3": 6,
  "3x3": 9,
};

export const PlayerScore: React.FC<{ player: PlayerI }> = ({ player }) => {
  const state = useSelector();

  const { players } = state;

  let score = 0;

  const calculateScoreForPuddings = () => {
    let scoreToReturn = 0;

    const totalPuddingsOfPlayer = (p: PlayerI) =>
      p.rounds.reduce((acc, round) => acc + round.puddings, 0);

    const puddingsOfOtherPlayers = players
      .filter((p) => p.id !== player.id)
      .map((p) => totalPuddingsOfPlayer(p));

    const puddingsOfPlayer = totalPuddingsOfPlayer(player);

    const maxPuddings = Math.max(...puddingsOfOtherPlayers, puddingsOfPlayer);

    if (puddingsOfPlayer === maxPuddings) {
      const totalPlayersWithMaxPuddings = [
        ...puddingsOfOtherPlayers,
        puddingsOfPlayer,
      ].reduce(
        (acc, puddings) => (puddings === maxPuddings ? acc + 1 : acc),
        0
      );

      scoreToReturn += Math.floor(6 / totalPlayersWithMaxPuddings);
    }

    if (players.length > 2) {
      const minPuddings = Math.min(...puddingsOfOtherPlayers, puddingsOfPlayer);

      if (puddingsOfPlayer === minPuddings) {
        const totalPlayersWithMinPuddings = [
          ...puddingsOfOtherPlayers,
          puddingsOfPlayer,
        ].reduce(
          (acc, puddings) => (puddings === minPuddings ? acc + 1 : acc),
          0
        );

        scoreToReturn -= Math.floor(6 / totalPlayersWithMinPuddings);
      }
    }

    return scoreToReturn;
  };

  const calculateScoreForMakiRollsForRound = (roundIndex: RoundIndexesI) => {
    let scoreToReturn = 0;

    const makiRollsOfOtherPlayers = players
      .filter((p) => p.id !== player.id)
      .map((p) => p.rounds[roundIndex].makiRollIcons);

    const makiRollsOfPlayer = player.rounds[roundIndex].makiRollIcons;

    const maxMakiRolls = Math.max(
      ...makiRollsOfOtherPlayers,
      makiRollsOfPlayer
    );

    if (makiRollsOfPlayer === maxMakiRolls) {
      const totalPlayersWithMaxMakiRolls = [
        ...makiRollsOfOtherPlayers,
        makiRollsOfPlayer,
      ].reduce(
        (acc, makiRolls) => (makiRolls === maxMakiRolls ? acc + 1 : acc),
        0
      );

      scoreToReturn += Math.floor(6 / totalPlayersWithMaxMakiRolls);
    }

    if (makiRollsOfPlayer !== maxMakiRolls) {
      const remainderMakiRolls = [
        ...makiRollsOfOtherPlayers,
        makiRollsOfPlayer,
      ].filter((v) => v !== maxMakiRolls);

      const secondMaxMakiRolls = Math.max(...remainderMakiRolls);

      if (makiRollsOfPlayer === secondMaxMakiRolls) {
        const totalPlayersWithSecondMaxMakiRolls = remainderMakiRolls.reduce(
          (acc, makiRolls) =>
            makiRolls === secondMaxMakiRolls ? acc + 1 : acc,
          0
        );

        scoreToReturn += Math.floor(3 / totalPlayersWithSecondMaxMakiRolls);
      }
    }

    return scoreToReturn;
  };

  const calculateScoreForRound = (roundIndex: RoundIndexesI) => {
    const round = player.rounds[roundIndex];
    let scoreToReturn = 0;

    // sashimis
    scoreToReturn += 10 * Math.floor(round.sashimis / 3);

    // tempuras
    scoreToReturn += 5 * Math.floor(round.tempuras / 2);

    // dumplings
    scoreToReturn += dumplingsScoreMap[round.dumplings] ?? 15;

    // nigiri and wasabi
    scoreToReturn += round.nigiriAndWasabi.reduce(
      (acc, value) => acc + nigiriAndWasabiScoreMap[value],
      0
    );

    // maki rolls
    scoreToReturn += calculateScoreForMakiRollsForRound(roundIndex);

    return scoreToReturn;
  };

  const roundIndexes: RoundIndexesI[] = [0, 1, 2];

  // pudding
  score += calculateScoreForPuddings();

  roundIndexes.forEach(
    (roundIndex) => (score += calculateScoreForRound(roundIndex))
  );

  return <Typography variant="h6">Score: {score}</Typography>;
};
