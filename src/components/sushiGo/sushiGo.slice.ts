import { PlayerI } from "./players/player.type";
import * as uuid from "uuid";
import { RoundI } from "./rounds/round.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SushiGoState {
  players: PlayerI[];
}

const initRound = (): RoundI => ({
  dumplings: 0,
  makiRollIcons: 0,
  nigiriAndWasabi: [],
  sashimis: 0,
  tempuras: 0,
  puddings: 0,
});

const initPlayer = (name: string): PlayerI => ({
  id: uuid.v4(),
  name,
  rounds: [initRound(), initRound(), initRound()],
});

const initialState: SushiGoState = {
  players: [initPlayer("Player 1"), initPlayer("Player 2")],
};

export const sushiGoSlice = createSlice({
  name: "sushiGo",
  initialState,
  reducers: {
    addPlayer: (state, action: PayloadAction<string>) => {
      state.players.push(initPlayer(action.payload));
    },
    deletePlayer: (state, action: PayloadAction<string>) => {
      state.players = state.players.filter(({ id }) => id !== action.payload);
    },
    setRoundData: (
      state,
      action: PayloadAction<{
        playerId: string;
        data: RoundI;
        roundIndex: 0 | 1 | 2;
      }>
    ) => {
      const { playerId, data, roundIndex } = action.payload;

      const player = state.players.find(({ id }) => id === playerId);
      if (!player) {
        return;
      }

      player.rounds[roundIndex] = data;
    },
    reset: () => initialState,
  },
});

export const { addPlayer, deletePlayer, setRoundData, reset } =
  sushiGoSlice.actions;

export const { reducer } = sushiGoSlice;
