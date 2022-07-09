import { NigiriAndWasabiI } from "../sushi/nigiriAndWasabi.type";

export interface RoundI {
  makiRollIcons: number;
  tempuras: number;
  sashimis: number;
  dumplings: number;
  puddings: number;
  nigiriAndWasabi: NigiriAndWasabiI[];
}

export type RoundIndexesI = 0 | 1 | 2;
