import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerI } from "./players/player.type";
import { StackI } from "./stacks/stack.type";

export interface LostCitiesRivalsState {
  players: PlayerI[];
}

const initPlayer = (name: string): PlayerI => ({
  name,
  stacks: new Array(2).fill({
    multipliers: 1,
    singlePointers: 0,
    doublePointers: 0,
  }),
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
    changePlayerStacks: (
      state,
      action: PayloadAction<{
        playerIndex: number;
        stackIndex: number;
        stack: StackI;
      }>
    ) => {
      const { playerIndex, stackIndex, stack } = action.payload;
      state.players[playerIndex].stacks[stackIndex] = stack;
    },
  },
});

export const { addPlayer, changePlayerStacks } = lostCitiesRivalsSlice.actions;

export const { reducer } = lostCitiesRivalsSlice;
