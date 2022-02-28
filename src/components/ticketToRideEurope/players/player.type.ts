export interface PlayerI {
  id: string;
  name: string;
  oneWagonRoutes: number;
  twoWagonRoutes: number;
  threeWagonRoutes: number;
  fourWagonRoutes: number;
  fiveWagonRoutes: number;
  sixWagonRoutes: number;
  eightWagonRoutes: number;
  stationsKept: number;
  biggestRouteLength: number;
  completedTicketPoints: number[];
  uncompletedTicketPoints: number[];
}