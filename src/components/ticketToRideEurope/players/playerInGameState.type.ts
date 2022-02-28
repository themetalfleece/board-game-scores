export interface PlayerInGameState {
  oneWagonRoutes: number;
  twoWagonRoutes: number;
  threeWagonRoutes: number;
  fourWagonRoutes: number;
  sixWagonRoutes: number;
  eightWagonRoutes: number;
  stationsKept: number;
  biggestRouteLength: number;
  completedTicketPoints: number[];
  uncompletedTicketPoints: number[];
}
