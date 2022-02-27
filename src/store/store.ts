import { configureStore } from "@reduxjs/toolkit";
import { reducer as lostCitiesRivalsReducer } from "../components/lostCitiesRivals/lostCitiesRivals.slice";
import { loadState, saveState } from "./localStorage";

export const store = configureStore({
  reducer: {
    lostCitiesRivals: lostCitiesRivalsReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
