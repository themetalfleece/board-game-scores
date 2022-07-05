import { RoundI } from "../rounds/round.type";

export interface PlayerI {
  id: string;
  name: string;
  round1: RoundI;
  round2: RoundI;
  round3: RoundI;
}
