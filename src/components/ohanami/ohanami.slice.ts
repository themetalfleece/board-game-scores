import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerI } from "./players/player.type";
import * as uuid from "uuid";
import { PlayerInGameState } from "./players/playerInGameState.type";

export interface OhanamiState {
  players: PlayerI[];
}

const initPlayer = (name: string): PlayerI => ({
  id: uuid.v4(),
  name,
  inGameState: {
    roundOneBlue: 0,
    roundTwoBlue: 0,
    roundTwoGreen: 0,
    roundThreeBlue: 0,
    roundThreeGreen: 0,
    roundThreeGrey: 0,
    roundThreePink: 0,
  },
});

const initialState: OhanamiState = {
  players: [initPlayer("Player 1"), initPlayer("Player 2")],
};

export const ohanamiSlice = createSlice({
  name: "ohanami",
  initialState,
  reducers: {
    addPlayer: (state, action: PayloadAction<string>) => {
      state.players.push(initPlayer(action.payload));
    },
    deletePlayer: (state, action: PayloadAction<string>) => {
      state.players = state.players.filter(({ id }) => id !== action.payload);
    },
    setPlayerData: (
      state,
      action: PayloadAction<{
        playerId: string;
        data: PlayerInGameState;
      }>
    ) => {
      const { playerId, data } = action.payload;

      const player = state.players.find(({ id }) => id === playerId);
      if (!player) {
        return;
      }

      player.inGameState = data;
    },
    reset: () => initialState,
  },
});

export const { addPlayer, deletePlayer, setPlayerData, reset } =
  ohanamiSlice.actions;

export const { reducer } = ohanamiSlice;
