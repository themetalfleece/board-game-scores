import { PlayerInGameState } from "./playerInGameState.type";

export interface PlayerI {
  id: string;
  name: string;
  inGameState: PlayerInGameState;
}
