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
  stacks: new Array(2).fill(undefined).map(() => ({
    id: uuid.v4(),
    multipliers: 1,
    singlePointers: 0,
    doublePointers: 0,
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
  },
});

export const { addPlayer, setPlayerStack } = lostCitiesRivalsSlice.actions;

export const { reducer } = lostCitiesRivalsSlice;
