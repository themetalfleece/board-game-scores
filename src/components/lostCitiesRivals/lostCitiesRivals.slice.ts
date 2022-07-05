import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerI } from "./players/player.type";
import { StackI } from "./stacks/stack.type";
import * as uuid from "uuid";

export interface LostCitiesRivalsState {
  players: PlayerI[];
}

const initPlayer = (name: string): PlayerI => ({
  id: uuid.v4(),
  name,
  coins: 0,
  stacks: new Array(5).fill(undefined).map((_, index) => ({
    id: uuid.v4(),
    // first 2 stacks have a multiplier, the rest have none
    multipliers: index <= 1 ? 1 : 0,
    singleFootprints: 0,
    doubleFootprints: 0,
  })),
});

const initialState: LostCitiesRivalsState = {
  players: [initPlayer("Player 1"), initPlayer("Player 2")],
};

export const lostCitiesRivalsSlice = createSlice({
  name: "lostCitiesRivals",
  initialState,
  reducers: {
    addPlayer: (state, action: PayloadAction<string>) => {
      state.players.push(initPlayer(action.payload));
    },
    deletePlayer: (state, action: PayloadAction<string>) => {
      state.players = state.players.filter(({ id }) => id !== action.payload);
    },
    setPlayerCoins: (
      state,
      action: PayloadAction<{ playerId: string; coins: PlayerI["coins"] }>
    ) => {
      const { coins, playerId } = action.payload;

      const player = state.players.find(({ id }) => id === playerId);
      if (!player) {
        return;
      }

      player.coins = coins;
    },
    setPlayerStack: (
      state,
      action: PayloadAction<{
        playerId: PlayerI["id"];
        stackId: PlayerI["id"];
        stack: StackI;
      }>
    ) => {
      const { playerId, stackId, stack } = action.payload;

      const player = state.players.find(({ id }) => id === playerId);
      if (!player) {
        return;
      }

      const stackIndex = player?.stacks.findIndex(({ id }) => id === stackId);
      if (stackIndex === -1) {
        return;
      }

      player.stacks[stackIndex] = stack;
    },
    reset: () => initialState,
  },
});

export const {
  addPlayer,
  deletePlayer,
  setPlayerStack,
  setPlayerCoins,
  reset,
} = lostCitiesRivalsSlice.actions;

export const { reducer } = lostCitiesRivalsSlice;
