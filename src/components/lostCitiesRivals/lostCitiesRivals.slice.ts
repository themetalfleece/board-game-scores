import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlayerI {
  name: string;
  stacks: StackI[];
}

interface StackI {
  multipliers: number;
  singlePointers: number;
  doublePointers: number;
}

export interface LostCitiesRivalsState {
  players: PlayerI[];
}

const initPlayer = (name: string): PlayerI => ({
  name,
  stacks: [
    {
      multipliers: 1,
      singlePointers: 0,
      doublePointers: 0,
    },
    {
      multipliers: 1,
      singlePointers: 0,
      doublePointers: 0,
    },
  ],
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
