import { configureStore } from "@reduxjs/toolkit";
import { reducer as lostCitiesRivalsReducer } from "../components/lostCitiesRivals/lostCitiesRivals.slice";

export const store = configureStore({
  reducer: {
    lostCitiesRivals: lostCitiesRivalsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
