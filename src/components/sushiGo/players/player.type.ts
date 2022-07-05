import { RoundI } from "../rounds/round.type";

export interface PlayerI {
  id: string;
  name: string;
  rounds: [RoundI, RoundI, RoundI];
}
