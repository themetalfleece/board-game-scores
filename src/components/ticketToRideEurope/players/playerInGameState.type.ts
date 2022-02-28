export interface PlayerInGameState {
  oneWagonRoutes: number;
  twoWagonRoutes: number;
  threeWagonRoutes: number;
  fourWagonRoutes: number;
  sixWagonRoutes: number;
  eightWagonRoutes: number;
  stationsKept: number;
  longestPathLength: number;
  completedTicketPoints: number[];
  uncompletedTicketPoints: number[];
}
