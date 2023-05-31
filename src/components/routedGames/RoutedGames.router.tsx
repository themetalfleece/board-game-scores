import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { GamePicker } from "../gamePicker/GamePicker.page";
import { LostCitiesRivals } from "../lostCitiesRivals/LostCitiesRivals.page";
import { Ohanami } from "../ohanami/Ohanami.page";
import { TicketToRideEurope } from "../ticketToRideEurope/TicketToRideEurope.page";
import { SushiGo } from "../sushiGo/SushiGo.page";
import { gameRoutes } from "./gameRoutes";

export const RoutedGames: React.FC = () => {
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
      <Route path={gameRoutes.ohanami} element={<Ohanami />} />
      <Route path={gameRoutes.sushiGo} element={<SushiGo />} />
      <Route index element={<GamePicker />} />
    </Routes>
  );
};
