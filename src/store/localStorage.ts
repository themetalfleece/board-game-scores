import { RootState } from "./store";

const latestStateVersion = "1";
const stateKey = "state";
const stateVersionKey = "stateVersion";

export const loadState = () => {
  try {
    const stateVersion = localStorage.getItem(stateVersionKey);

    if (stateVersion !== latestStateVersion) {
      localStorage.removeItem(stateKey);
      localStorage.removeItem(stateVersionKey);
      return;
    }

    const serializedState = localStorage.getItem(stateKey);

    if (serializedState === null) {
      return;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    console.error(err);
    return;
  }
};

export const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(stateKey, serializedState);
    localStorage.setItem(stateVersionKey, latestStateVersion);
  } catch (err) {
    console.error(err);
  }
};
