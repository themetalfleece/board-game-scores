import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { GamePicker } from "../gamePicker/GamePicker.page";
import { LostCitiesRivals } from "../lostCitiesRivals/LostCitiesRivals.page";
import { TicketToRideEurope } from "../ticketToRideEurope/TicketToRideEurope.page";
import { gameRoutes } from "./gameRoutes";

export const RoutedGames: React.FC<{}> = () => {
  return (
    <Routes>
      <Route
        path={gameRoutes.lostCitiesRivals}
        element={<LostCitiesRivals />}
      />
      <Route
        path={gameRoutes.ticketToRideEurope}
        element={<TicketToRideEurope />}
      />
      <Route index element={<GamePicker />} />
    </Routes>
  );
};
