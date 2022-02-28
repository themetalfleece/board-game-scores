import { configureStore } from "@reduxjs/toolkit";
import { reducer as lostCitiesRivalsReducer } from "../components/lostCitiesRivals/lostCitiesRivals.slice";
import { reducer as ticketToRideEuropeReducer } from "../components/ticketToRideEurope/ticketToRideEurope.slice";
import { loadState, saveState } from "./localStorage";

export const store = configureStore({
  reducer: {
    lostCitiesRivals: lostCitiesRivalsReducer,
    ticketToRideEurope: ticketToRideEuropeReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
