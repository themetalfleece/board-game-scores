import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerI } from "./players/player.type";
import * as uuid from "uuid";
import { PlayerInGameState } from "./players/playerInGameState.type";

export interface TicketToRideEuropeState {
  players: PlayerI[];
}

const initPlayer = (name: string): PlayerI => ({
  id: uuid.v4(),
  name,
  inGameState: {
    biggestRouteLength: 0,
    oneWagonRoutes: 0,
    twoWagonRoutes: 0,
    threeWagonRoutes: 0,
    fourWagonRoutes: 0,
    sixWagonRoutes: 0,
    eightWagonRoutes: 0,
    completedTicketPoints: [],
    uncompletedTicketPoints: [],
    stationsKept: 3,
  },
});

const initialState: TicketToRideEuropeState = {
  players: [initPlayer("Player 1"), initPlayer("Player 2")],
};

export const ticketToRideEuropeSlice = createSlice({
  name: "ticketToRideEurope",
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
  ticketToRideEuropeSlice.actions;

export const { reducer } = ticketToRideEuropeSlice;
